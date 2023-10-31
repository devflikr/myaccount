import { twMerge } from "tailwind-merge";

export interface UserLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    text?: React.ReactNode;
    subtext?: React.ReactNode;
    username?: React.ReactNode;
    icon?: React.ReactNode;
}

const UserLink = ({ target, rel, className, text, subtext, icon, username, ...props }: UserLinkProps) => (<a
    target={target || "_blank"}
    rel={rel || (target && "noopener noreferrer")}
    {...props}
    className={twMerge(
        "w-full block px-5 py-3 first-of-type:rounded-t-xl last-of-type:rounded-b-xl bg-[#111] hover:bg-[#32333c] focus-visible:bg-[#32333c] transition-all hover:no-underline cursor-pointer border border-[#000]",
        "flex flex-wrap items-center gap-3",
        className
    )}
>
    {icon && <div className="w-6 [&:has(>img)]w-10 min-w-[24px] [&:has(>img)]:min-w-[40px] flex justify-center items-center aspect-square rounded-full overflow-hidden cs-drop-3 cs-drop-c2">{icon}</div>}
    <div className=" leading-4">
        <div className="">{text}</div>
        {subtext && <div className="text-sm text-gray-300">{subtext}</div>}
        {username && <div className="text-xs text-gray-500">@{username}</div>}
    </div>
</a>);

export default UserLink;
import React from 'react';
import "./SidePanel.css";
import { BadgeCheck, Contact2, Home, Key, MonitorSmartphone, PhoneCall, ShieldCheck } from 'lucide-react';
import SideButton from './SideButton';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { useAuthCurrentUser } from 'react-devflikrauth-hooks';

export interface SidePanelProps {
    className?: React.HTMLAttributes<HTMLDivElement>["className"],
    containerClass?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export const SidePanelValues = [
    {
        name: "Home",
        icon: <Home />,
        link: "",
    },
    {
        name: "Personal Profile",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "Login Details",
        icon: <Key />,
        link: "login",
    },
    {
        name: "Contact Info",
        icon: <PhoneCall />,
        link: "contact",
    },
    {
        name: "Password & Security",
        icon: <ShieldCheck />,
        link: "security",
    },
    {
        name: "Devices",
        icon: <MonitorSmartphone />,
        link: "devices",
    },
    {
        name: "Account",
        icon: <BadgeCheck />,
        link: "account",
    },
];

function SidePanel({ className, containerClass }: SidePanelProps) {
    const [user] = useAuthCurrentUser();

    if (!user) return null;

    return (
        <div className={twMerge(classNames(
            "flex-1 max-w-xs sticky top-[72px] hidden flex-col h-[calc(100dvh_-_72px)] min-w-[240px] lg:flex",
            containerClass,
        ))}>
            <aside className={twMerge(classNames(
                "overflow-auto w-full h-full py-5",
                className
            ))}>
                {SidePanelValues.map(item => <SideButton key={item.name} to={item.link} icon={item.icon} name={item.name} />)}
            </aside>
            <div className="flex flex-nowrap pl-8 gap-8 mt-auto pb-2 text-xs">
                <a href={`https://devflikr.com/about/privacy?auth=${user.index}`} target="_blank" rel="noopener noreferrer">Privacy</a>
                <a href={`https://devflikr.com/about/terms?auth=${user.index}`} target="_blank" rel="noopener noreferrer">Terms</a>
                <a href={`https://support.devflikr.com/myaccount?auth=${user.index}&_refer=myaccount.devflikr.com`} target="_blank" rel="noopener noreferrer">Help</a>
            </div>
        </div>
    )
}

export default SidePanel;


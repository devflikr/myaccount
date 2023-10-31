import React from 'react';
import "./SidePanel.css";
import { Contact2, Home, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import SideButton from './SideButton';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

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
        name: "Personal Info",
        icon: <Contact2 />,
        link: "personal-info",
    },
    {
        name: "Security",
        icon: <ShieldCheck />,
        link: "security",
    },
    {
        name: "Devices",
        icon: <MonitorSmartphone />,
        link: "devices",
    },
];

function SidePanel({ className, containerClass }: SidePanelProps) {
    return (
        <div className={twMerge(classNames(
            "flex-1 max-w-xs sticky top-[72px] flex flex-col h-[calc(100dvh_-_72px)]",
            containerClass,
        ))}>
            <aside className={twMerge(classNames(
                "overflow-auto w-full h-full py-5",
                className
            ))}>
                {SidePanelValues.map(item => <SideButton key={item.name} to={item.link} icon={item.icon} name={item.name}/>)}
            </aside>
            <div className="flex flex-nowrap pl-8 gap-8 mt-auto pb-2 text-xs">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Help</span>
            </div>
        </div>
    )
}

export default SidePanel;


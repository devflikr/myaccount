import React from 'react';
import { Contact2, Home, MonitorSmartphone, ShieldCheck } from 'lucide-react';


export interface SearchQueries {
    name: string;
    icon?: React.ReactNode;
    link?: string;
    desc?: string;
    onClick?: () => void;
}

const searchQueries: SearchQueries[] = [
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

export default searchQueries;
import React from 'react';
import { Contact2, Home, MonitorSmartphone, ShieldCheck } from 'lucide-react';
import uuid from '../../core/utils/uuid';


export interface SearchQueries {
    name: string;
    icon?: React.ReactNode;
    link: string;
    desc?: string;
    key?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => boolean | undefined | null;
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
        link: "profile",
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

searchQueries.forEach(element => element.key = uuid());

export default searchQueries;
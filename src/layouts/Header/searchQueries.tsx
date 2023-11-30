import React from 'react';
import { BadgeCheck, BadgeHelp, Contact2, Home, Key, MonitorSmartphone, PhoneCall, ShieldCheck } from 'lucide-react';
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
        name: "Personal Profile",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "Full Name",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "First Name",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "Last Name",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "Birthday",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "Gender",
        icon: <Contact2 />,
        link: "profile",
    },
    {
        name: "Login Details",
        icon: <Key />,
        link: "login",
    },
    {
        name: "Username",
        icon: <Key />,
        link: "login",
    },
    {
        name: "Contact Info",
        icon: <PhoneCall />,
        link: "contact",
    },
    {
        name: "Phone Number",
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
        link: "devices",
    },
    {
        name: "Help",
        icon: <BadgeHelp />,
        link: "https://support.devflikr.com/myaccount?auth=:auth&_refer=myaccount.devflikr.com",
    },
];

searchQueries.forEach(element => element.key = uuid());

export default searchQueries;
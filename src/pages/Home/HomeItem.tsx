import React from 'react';
import Content from '../../layouts/Content';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

export interface HomeItemProps {
    to: string;
    image: string;
    title: React.ReactNode;
    desc: React.ReactNode;
    footer: React.ReactNode;
    blank?: boolean;
}

function HomeItem({ to, image, title, desc, footer, blank }: HomeItemProps) {
    return (
        <Content className="hover:bg-[#fff2] group">
            <Link to={to} className="group-hover:no-underline group-focus-within:no-underline flex flex-col w-full" target={blank ? "_blank" : undefined} rel="noopener noreferrer">
                <div className="flex flex-nowrap gap-3 sm:gap-8 p-3 md:p-5 items-center">
                    <img src={image} alt={image.split("/")[image.split("/").length - 1].split(".")[0]} className="w-12 md:w-16 aspect-square" />
                    <div className="">
                        <h2 className="text-xl font-bold group-hover:text-red-500 group-focus-within:text-red-500">{title}</h2>
                        <h3 className="text-sm text-gray-300">{desc}</h3>
                    </div>
                </div>
                <footer className="border-t-2 border-t-black flex items-center px-5 py-2 gap-5 justify-between group-hover:text-red-400 group group-focus-within:text-red-400">
                    <span>{footer}</span><MoveRight />
                </footer>
            </Link>
        </Content>
    );
}

export default HomeItem;
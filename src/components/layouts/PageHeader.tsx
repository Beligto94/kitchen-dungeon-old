import React from 'react';
import { LinkItemProps } from './SidebarWrapper';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
    title: string;
    subMenu?: Array<LinkItemProps>;
}

export const PageHeader = ({ title, subMenu }: Props) => {
    return (
        <header className="shadow bg-sky-900 ">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 justify-center flex">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
            </div>
            {subMenu && (
                <div className="flex space-x-4 justify-center">
                    <nav className="flex justify-between items-center h-[50px] px-5 text-white">
                        <ul>
                            {subMenu.map(item => (
                                <li key={item.name} className="float-left">
                                    <NavLink
                                        key={item.name}
                                        to={item.to}
                                        end={item.end}
                                        className={({ isActive }) =>
                                            cn(
                                                'px-3 py-2 rounded-md text-sm font-medium',
                                                { 'text-rose-500': isActive },
                                                { 'text-gray-300 hover:text-white': !isActive },
                                            )
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

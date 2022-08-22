import React, { FC, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

type Props = {
    title: string;
    collapsedDefault?: boolean;
    children: React.ReactNode;
};

export const CollapsibleBlock = ({ title, children, collapsedDefault = false }: Props) => {
    const [collapsed, setCollapsed] = useState<boolean>(collapsedDefault);

    return (
        <div className="flex flex-col w-full rounded-2xl bg-neutral-100 px-6 py-6 mb-8 shadow-md" >
            <div className="flex justify-between" onClick={() => setCollapsed(!collapsed)}>
                <h1 className="text-gray-900 text-2xl font-bold">{title}</h1>
                <button onClick={() => setCollapsed(!collapsed)}>
                    {!collapsed ? <BiChevronDown className="text-3xl" /> : <BiChevronUp className="text-3xl" />}
                </button>
            </div>
            {collapsed && <div className="mt-4">{children}</div>}
        </div>
    );
};

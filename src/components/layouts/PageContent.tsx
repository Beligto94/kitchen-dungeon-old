import React, { FC } from 'react';

interface Props {
    children?: React.ReactNode;
}

export const PageContent = ({ children }: Props) => {
    return (
        <main className="flex grow">
            <div className="w-5/6 mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
    );
};

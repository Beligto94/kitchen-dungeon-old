import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageHeader } from '../../components/layouts/PageHeader';
import { FaDungeon } from 'react-icons/fa';

export const PersonalView = () => {
    return (
        <>
            <PageHeader
                title={'Личный кабинет'}
                subMenu={[
                    { name: 'Информация', to: '', end: true },
                    { name: 'Подземелье', to: 'dungeon' },
                    { name: 'Скиллы', to: 'skills' },
                    { name: 'Настройки', to: 'settings' },
                ]}
            />
            <Outlet />
        </>
    );
};

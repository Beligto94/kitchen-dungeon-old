import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

export const QuestsView = () => {
    useEffect(()=> {
        console.log('quests')
    },[])
    return (
        <Outlet/>
    );
};

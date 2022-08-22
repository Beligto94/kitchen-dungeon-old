import React, { useEffect } from 'react';
import { PageHeader } from '../components/layouts/PageHeader';
import { PageContent } from '../components/layouts/PageContent';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import { fetchUsers } from '../store/reducers/ActionCreators';

const Gallery = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <PageHeader title={'Библиотека'} />
            <PageContent>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>{error}</h1>}
                {JSON.stringify(users, null, 2)}
            </PageContent>
        </div>
    );
};

export default Gallery;

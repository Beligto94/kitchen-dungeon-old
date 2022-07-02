import React, { Fragment } from 'react';
import { postAPI } from '../services/PostService';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import Dungeon from './Dungeon';
import { ListIcon, ListItem, List, Box } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { inspect } from 'util';
import styles from './Dungeons.module.css';

const Dungeons = () => {
    const {
        data: posts,
        error,
        isLoading,
        refetch,
    } = postAPI.useFetchAllPostsQuery({
        limit: 3,
        embed: 'comments',
    });

    return (
        <>
            <Box w="full" bg="white" shadow="md" borderRadius='xl' p={4}>
                <Box>DUNGEON</Box>
                <Box bg={{ base: 'teal.800', md: 'teal.800' }} w="100%" p={4} color="white">
                    <List spacing={3}>
                        {posts?.map(post => (
                            <ListItem key={post.id}>
                                <NavLink to={post.id.toString()} style={{ textDecoration: 'none' }}>
                                    <ListIcon as={CheckCircleIcon} color={{ base: 'blackAlpha.400', md: 'blue' }} />
                                    {post.title}
                                </NavLink>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Outlet />
            </Box>
        </>
    );
};

export default Dungeons;

import React from 'react';
import { questAPI } from '../services/QuestService';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { PageContent } from './layouts/PageContent';

const Dungeons = () => {
    const {
        data: posts,
        error,
        isLoading,
        refetch,
    } = questAPI.useFetchAllQuestsQuery({
        limit: 3,
        embed: 'comments',
    });

    return (
        <>
            <PageContent>
                <Box w="full" bg="white" shadow="md" borderRadius="xl" p={4}>
                    <Box>DUNGEON</Box>
                    <Box bg={{ base: 'teal.800', md: 'teal.800' }} w="100%" p={4} color="white">
                        <List spacing={3}>
                            {posts?.map(post => (
                                <ListItem key={post.id}>
                                    <NavLink to={post.id.toString()} end style={{ textDecoration: 'none' }}>
                                        <ListIcon as={CheckCircleIcon} color={{ base: 'blackAlpha.400', md: 'blue' }} />
                                        {post.title}
                                    </NavLink>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                    <Outlet />
                </Box>
            </PageContent>
        </>
    );
};

export default Dungeons;

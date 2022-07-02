import React from 'react';
import { postAPI } from '../services/PostService';
import { NavLink, Outlet } from 'react-router-dom';
import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const PersonalView = () => {
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
            <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                <Heading mb={4}>Личный кабинет</Heading>
                <Box w="100%" p={4} border="1px" borderColor={'gray.300'} borderRadius={'xl'}>
                    <List spacing={2}>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Имя:
                            </Text>{' '}
                            BeligKing
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Уровень:
                            </Text>{' '}
                            100
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Изученные скиллы:
                            </Text>{' '}
                            React
                        </ListItem>
                        <ListItem>
                            <Text as={'span'} fontWeight={'bold'}>
                                Звание:
                            </Text>{' '}
                            42 mm
                        </ListItem>
                    </List>
                </Box>
                <Outlet />
            </Box>
        </>
    );
};

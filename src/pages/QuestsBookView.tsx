import React from 'react';
import { postAPI } from '../services/PostService';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import {} from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';

export const QuestsBookView = () => {
    const {
        data: posts,
        error,
        isLoading,
        refetch,
    } = postAPI.useFetchAllPostsQuery({
        embed: 'comments',
    });

    const navigate = useNavigate();

    return (
        <>
            <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                <Flex justifyContent={'space-between'} alignItems="center">
                    <Heading mb={4}>Quests Book</Heading>
                    <Button leftIcon={<IoMdAdd />} colorScheme="teal">
                        Создать
                    </Button>
                </Flex>
                <SimpleGrid minChildWidth="400px" spacing={10}>
                    {posts?.map(post => (
                        <Box p={5} key={post.id} border="1px" borderColor={'gray.300'} borderRadius="xl">
                            <Heading fontSize="xl">{post.title}</Heading>
                            <Text mt={4}>{post.description}</Text>
                            <Button
                                mt={4}
                                onClick={() => {
                                    navigate(`${post.id}`);
                                }}
                            >
                                Просмотр
                            </Button>
                        </Box>
                    ))}
                </SimpleGrid>
                <Outlet />
            </Box>
        </>
    );
};

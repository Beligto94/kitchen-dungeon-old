import React from 'react';
import { postAPI } from '../services/PostService';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Box, Heading, List, ListIcon, ListItem, Spinner, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const QuestView = () => {
    const { questId } = useParams();

    const { data: post, isLoading: isLoadingPosts } = postAPI.useGetPostQuery(questId as string, {
        refetchOnMountOrArgChange: true,
    });

    return (
        <>
            {isLoadingPosts ? (
                <Spinner />
            ) : (
                <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                    <Heading mb={4}>{post?.title}</Heading>
                    <Text mt={4}>{post?.description}</Text>
                </Box>
            )}
        </>
    );
};

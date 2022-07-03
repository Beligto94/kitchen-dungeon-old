import React from 'react';
import { postAPI } from '../services/PostService';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Flex, Heading, HStack, IconButton, Spinner, Text } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';

export const QuestView = () => {
    const { questId } = useParams();

    const { data: post, isLoading: isLoadingPosts } = postAPI.useGetPostQuery(questId as string, {
        refetchOnMountOrArgChange: true,
    });
    const navigate = useNavigate();

    return (
        <>
            {isLoadingPosts ? (
                <Spinner />
            ) : (
                <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                    <HStack align={'center'} mb={4} spacing={'12px'}>
                        <IconButton
                            aria-label="Назад"
                            variant={'ghost'}
                            onClick={() => navigate(-1)}
                            icon={<BiArrowBack />}
                        />
                        <Heading>{post?.title}</Heading>
                    </HStack>
                    <Text mt={4}>{post?.description}</Text>
                </Box>
            )}
        </>
    );
};

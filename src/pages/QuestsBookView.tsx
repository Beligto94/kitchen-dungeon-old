import React from 'react';
import { postAPI } from '../services/PostService';
import { Outlet, useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    IconButton,
    SimpleGrid,
    Text,
    useDisclosure,
    useToast,
    VStack,
} from '@chakra-ui/react';
import { MdOutlineDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { CreateQuestModal } from '../components/modals/CreateQuestModal';
import { IUser } from '../models/IUser';
import { userAPI } from '../services/UserService';
import { IPost } from '../models/IPost';

export const QuestsBookView = () => {
    const {
        data: posts,
        error,
        isLoading,
        refetch,
    } = postAPI.useFetchAllPostsQuery({
        embed: 'comments',
    });

    const [deletePost] = postAPI.useDeletePostMutation();

    const toast = useToast();

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleRemove = (post: IPost) => {
        deletePost(post.id)
            .unwrap()
            .then(() => {
                toast({
                    title: `${post?.title} удален`,
                    status: 'info',
                    isClosable: true,
                });
            });
    };

    return (
        <>
            <CreateQuestModal isOpen={isOpen} onClose={onClose} />

            <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                <Flex justifyContent={'space-between'} alignItems="center">
                    <Heading mb={4}>Quests Book</Heading>
                    <Button leftIcon={<IoMdAdd />} onClick={onOpen} colorScheme="teal">
                        Создать
                    </Button>
                </Flex>
                <SimpleGrid minChildWidth="400px" spacing={10}>
                    {posts?.map(post => (
                        <Box p={5} key={post.id} border="1px" borderColor={'gray.300'} borderRadius="xl">
                            <HStack justifyContent={'space-between'}>
                                <Heading fontSize="xl">{post.title}</Heading>
                                <IconButton
                                    aria-label={'Удалить'}
                                    colorScheme="red"
                                    size={'sm'}
                                    onClick={() => {
                                        handleRemove(post);
                                    }}
                                    icon={<MdOutlineDelete />}
                                />
                            </HStack>
                            <Text mt={4}>{post.description}</Text>

                            <HStack spacing={3} mt={4}>
                                <Button
                                    onClick={() => {
                                        navigate(`${post.id}`);
                                    }}
                                >
                                    Просмотр
                                </Button>
                                <Button
                                    variant={'outline'}
                                    onClick={() => {
                                        console.log();
                                    }}
                                >
                                    Редактировать
                                </Button>
                            </HStack>
                        </Box>
                    ))}
                </SimpleGrid>
                <Outlet />
            </Box>
        </>
    );
};

import React from 'react';
import { questAPI } from '../services/QuestService';
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
} from '@chakra-ui/react';
import { MdOutlineDelete } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { CreateQuestModal } from '../components/modals/CreateQuestModal';
import { IQuest } from '../models/IQuest';
import { PageHeader } from '../components/layouts/PageHeader';
import { PageContent } from '../components/layouts/PageContent';

export const QuestsBookView = () => {
    const {
        data: quests,
        error,
        isLoading,
        refetch,
    } = questAPI.useFetchAllQuestsQuery({
        embed: 'comments',
    });

    const [deletePost] = questAPI.useDeleteQuestMutation();

    const toast = useToast();

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleRemove = (quest: IQuest) => {
        deletePost(quest.id)
            .unwrap()
            .then(() => {
                toast({
                    title: `${quest?.title} удален`,
                    status: 'info',
                    isClosable: true,
                });
            });
    };

    return (
        <>
            <CreateQuestModal isOpen={isOpen} onClose={onClose} />
            <PageHeader title="Квесты" />
            <PageContent>
                <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                    <Flex marginBottom={4} justifyContent={'space-between'} alignItems="center">
                        <Button leftIcon={<IoMdAdd />} onClick={onOpen} colorScheme="teal">
                            Создать
                        </Button>
                    </Flex>
                    <SimpleGrid minChildWidth="400px" spacing={10}>
                        {quests?.map(quest => (
                            <Box p={5} key={quest.id} border="1px" borderColor={'gray.300'} borderRadius="xl">
                                <HStack justifyContent={'space-between'}>
                                    <Heading fontSize="xl">{quest.title}</Heading>
                                    <IconButton
                                        aria-label={'Удалить'}
                                        colorScheme="red"
                                        size={'sm'}
                                        onClick={() => {
                                            handleRemove(quest);
                                        }}
                                        icon={<MdOutlineDelete />}
                                    />
                                </HStack>
                                <Text mt={4}>{quest.description}</Text>
                                <Text mt={4}>{quest.rewards}</Text>

                                <HStack spacing={3} mt={4}>
                                    <Button
                                        onClick={() => {
                                            navigate(`${quest.id}`);
                                        }}
                                    >
                                        Просмотр
                                    </Button>
                                    <Button
                                        disabled
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
            </PageContent>
        </>
    );
};

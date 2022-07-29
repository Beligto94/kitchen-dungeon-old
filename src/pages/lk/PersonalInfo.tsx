import React from 'react';
import {Box, Heading, List, ListItem, Text} from "@chakra-ui/react";
import {Outlet} from "react-router-dom";
import {PageContent} from "../../components/layouts/PageContent";

const PersonalInfo = () => {
    return (
        <PageContent>
            <Box w="full" bg="white" shadow="md" borderRadius="xl" p={8}>
                <Heading mb={4}>Основные</Heading>
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
                            Командир
                        </ListItem>
                    </List>
                </Box>
                <Outlet />
            </Box>
        </PageContent>
    );
};

export default PersonalInfo;
import React from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { PageContent } from '../../components/layouts/PageContent';
import { CollapsibleBlock } from '../../components/CollapsibleBlock';

const PersonalInfo = () => {
    return (
        <>
            <PageContent>
                <div className="flex">
                    <div className="flex flex-col w-2/3">
                        <CollapsibleBlock title={'Основные данные'} collapsedDefault>
                            <Box
                                w="100%"
                                p={4}
                                border="1px"
                                borderColor={'gray.300'}
                                bgColor={'white'}
                                borderRadius={'xl'}
                            >
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
                        </CollapsibleBlock>
                        <CollapsibleBlock title={'Скиллы'}>Компонент скиллов</CollapsibleBlock>
                        <CollapsibleBlock title={'Экипировка'}>Компонент экипировка</CollapsibleBlock>
                        <CollapsibleBlock title={'Звание'}>Компонент звание</CollapsibleBlock>
                    </div>
                    <div className="w-1/3 ml-8 min-h-full bg-white border-2 rounded-2xl">

                    </div>
                </div>
            </PageContent>
        </>
    );
};

export default PersonalInfo;

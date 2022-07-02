import React from 'react';
import { postAPI } from '../services/PostService';
import { Outlet } from 'react-router-dom';
import { Box, Button, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import {} from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';

export const QuestsView = () => {
    return (
        <Outlet/>
    );
};

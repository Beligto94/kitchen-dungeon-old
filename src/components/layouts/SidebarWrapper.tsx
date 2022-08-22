import React from 'react';
import { Box, BoxProps, CloseButton, Flex, Text } from '@chakra-ui/react';
import { FiCompass, FiHome } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { GrGallery } from 'react-icons/gr';
import { BsPersonCircle } from 'react-icons/bs';
import { NavItem } from '../NavBar/NavItem';

export interface LinkItemProps {
    name: string;
    icon?: IconType;
    to: string;
    end?: boolean;
    submenu?: Array<LinkItemProps>;
}

export const LinkItems: Array<LinkItemProps> = [
    // { name: 'Главная', icon: FiHome, to: '' },
    { name: 'Личный кабинет', icon: BsPersonCircle, to: '/lk' },
    { name: 'Квесты', icon: FiCompass, to: '/quests' },
    { name: 'Библиотека', icon: GrGallery, to: '/gallery' },
    // {name: 'DUNGEON', icon: FaDungeon, to: '/dungeon'},
    // {name: 'SKILLS', icon: FiStar, to: '/skills'},
    // {name: 'Настройки', icon: FiSettings, to: '/settings'},
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export const SidebarWrapper = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box w={{ base: 'full', md: 60 }} color={'blackAlpha.900'} pos="fixed" h="full" {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Kitchen-Dungeon
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map(link => (
                <NavItem key={link.name} to={link.to} onClose={onClose}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

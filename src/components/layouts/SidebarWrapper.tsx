import React, { ReactText } from 'react';
import { Box, BoxProps, CloseButton, Flex, FlexProps, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { FiCompass, FiHome, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { NavLink } from 'react-router-dom';
import {GrGallery} from "react-icons/gr";
import {FaDungeon} from "react-icons/fa";
import {BsPersonCircle} from "react-icons/bs";

interface LinkItemProps {
    name: string;
    icon: IconType;
    to: string;
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Главная', icon: FiHome, to: '' },
    { name: 'Личный кабинет', icon: BsPersonCircle, to: '/lk' },
    { name: 'Квесты', icon: FiCompass, to: '/quests' },
    { name: 'Галерея футажей', icon: GrGallery, to: '/gallery' },
    { name: 'DUNGEON', icon: FaDungeon, to: '/dungeon' },
    { name: 'SKILLS', icon: FiStar, to: '/skills' },
    { name: 'Настройки', icon: FiSettings, to: '/settings' },
];

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    to: string;
}

const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
    return (
        <NavLink to={to} style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="xl"
                    role="group"
                    cursor="pointer"
                    bg={isActive ? 'white' : ''}
                    color={isActive ? 'black' : 'gray.600'}
                    shadow={isActive ? 'xl' : ''}
                    _hover={{
                        color: 'black',
                    }}
                    {...rest}
                >
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            )}
        </NavLink>
    );
};

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export const SidebarWrapper = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            w={{ base: 'full', md: 60 }}
            color={'blackAlpha.900'}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Kitchen-Dungeon
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map(link => (
                <NavItem key={link.name} icon={link.icon} to={link.to}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

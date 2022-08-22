import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavItem } from './NavItem';
import { LinkItems } from '../layouts/SidebarWrapper';
import cn from 'classnames';
import {
    Avatar,
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import { FiBell, FiChevronDown, FiMenu, FiSearch } from 'react-icons/fi';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
];

interface Props {
    submit: () => void;
}

export const MainWrapper = ({ submit }: Props) => {
    return (
        <div className="min-h-screen  flex flex-col">
            <div className="bg-sky-900">
                <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8 ">
                    <div className="relative flex items-center justify-between h-16">
                        <button type="button" className="block md:hidden p-1 rounded-md text-gray-400 hover:text-white">
                            <FiMenu />
                        </button>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch md:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <Text className="text-white" fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                                    Kitchen-Dungeon
                                </Text>
                            </div>
                            <div className="hidden md:block md:ml-6 xl:w-full">
                                <div className="flex space-x-4 justify-center">
                                    {LinkItems.map(item => (
                                        <NavLink
                                            key={item.name}
                                            to={item.to}
                                            className={({ isActive }) =>
                                                cn(
                                                    'px-3 py-2 rounded-md text-sm font-medium float-left',
                                                    { 'text-rose-500': isActive },
                                                    {
                                                        'text-gray-300 hover:bg-gray-700 hover:text-white': !isActive,
                                                    },
                                                )
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <HStack spacing={{ base: '0', md: '6' }}>
                                <button type="button" className="p-2 rounded-md text-gray-400 hover:text-white">
                                    <FiBell />
                                </button>
                                <button type="button" className="ml-3 p-2 rounded-md text-gray-400 hover:text-white">
                                    <FiSearch />
                                </button>
                                <Flex alignItems={'center'}>
                                    <Menu>
                                        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                                            <HStack>
                                                <Avatar
                                                    size={'sm'}
                                                    src={
                                                        'https://encrypted-tbn0.gstati' +
                                                        'c.com/images?q=tbn:ANd9GcRcVxy' +
                                                        'qBVFlpzFb0Cnj1Yd04Oxg6z-fG5zsgw&usqp=CAU'
                                                    }
                                                />
                                                <VStack
                                                    display={{ base: 'none', md: 'flex' }}
                                                    alignItems="flex-start"
                                                    spacing="1px"
                                                    ml="2"
                                                >
                                                    <Text fontSize="sm" color="white">
                                                        Бэлигто Дампилов
                                                    </Text>
                                                    <Text fontSize="xs" color="white">
                                                        Admin
                                                    </Text>
                                                </VStack>
                                                <Box display={{ base: 'none', md: 'flex' }} color={'white'}>
                                                    <FiChevronDown />
                                                </Box>
                                            </HStack>
                                        </MenuButton>
                                        <MenuList
                                            bg={useColorModeValue('white', 'gray.900')}
                                            borderColor={useColorModeValue('gray.200', 'gray.700')}
                                        >
                                            <MenuItem>Profile</MenuItem>
                                            <MenuItem>Settings</MenuItem>
                                            <MenuItem>Billing</MenuItem>
                                            <MenuDivider />
                                            <MenuItem onClick={submit}>Выйти</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </HStack>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

import React, {ReactText} from 'react';
import {NavLink} from "react-router-dom";
import {Flex, FlexProps, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface NavItemProps extends FlexProps {
    icon?: IconType;
    children: ReactText;
    to: string;
    onClose: () => void;
}

export const NavItem = ({icon, children, to, onClose, ...rest}: NavItemProps) => {
    return (
        <NavLink to={to} style={{textDecoration: 'none'}} onClick={onClose}>
            {({isActive}) => (
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
                    {icon && <Icon mr="4" fontSize="16" as={icon}/>}
                    {children}
                </Flex>
            )}
        </NavLink>
    );
};
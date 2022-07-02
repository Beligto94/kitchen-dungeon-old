import React from 'react';
import { postAPI } from '../services/PostService';
import { Link, NavLink, useParams } from 'react-router-dom';
import { userAPI } from '../services/UserService';
import { IUser } from '../models/IUser';
import { Button, List, ListIcon, ListItem, Spinner, Stack } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Dungeon = () => {
    const { userId } = useParams();

    const { data: post, isLoading: isLoadingPosts } = postAPI.useGetPostQuery(userId as string, {
        refetchOnMountOrArgChange: true,
    });

    const { data: users, isLoading } = userAPI.useFetchAllUsersQuery(undefined);
    const [createPost] = userAPI.useCreatePostMutation();
    const [deletePost] = userAPI.useDeletePostMutation();

    const handleCreate = async () => {
        const name = prompt();
        await createPost({ name, email: name + '@gmail.com' } as IUser);
    };

    const handleRemove = (user: IUser) => {
        deletePost(user);
    };

    return (
        <>
            {isLoadingPosts && <Spinner />}
            <h1>{post?.title}</h1>

            <Stack spacing={4} direction="row" align="center" mx="4">
                <Button colorScheme="blue" onClick={handleCreate}>
                    Add{' '}
                </Button>
            </Stack>
            <List spacing={3}>
                {users?.map(user => (
                    <ListItem key={user.id}>
                        <NavLink to={user.id.toString()} style={{ textDecoration: 'none' }}>
                            <ListIcon as={CheckCircleIcon} color={{ base: 'blackAlpha.400', md: 'blue' }} />
                            {user.email}
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default Dungeon;

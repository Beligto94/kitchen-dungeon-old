import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";


export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<IUser[], any>({
            query: (limit?: number, _embed?: string) => ({
                url: `/users`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['User']
        }),
        createPost: build.mutation<IUser, IUser>({
            query: (user) => ({
                url: `/users`,
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        updatePost: build.mutation<IUser, IUser>({
            query: (post) => ({
                url: `/users/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['User']
        }),
        deletePost: build.mutation<IUser, IUser>({
            query: (post) => ({
                url: `/users/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User']
        }),
    })
})

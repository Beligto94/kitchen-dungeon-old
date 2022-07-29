import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IQuest} from "../models/IQuest";


export const questAPI = createApi({
    reducerPath: 'questAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['Quest'],
    endpoints: (build) => ({
        fetchAllQuests: build.query<IQuest[], any>({
            query: ({limit, embed}) => ({
                url: `/quests`,
                params: {
                    _limit: limit,
                    _embed: embed
                }
            }),
            providesTags: result => ['Quest']
        }),
        getQuest: build.query<IQuest, string>({
            query: (id) => ({
                url: `/quests/${id}`,
            })
        }),
        createQuest: build.mutation<IQuest, IQuest>({
            query: (quest) => ({
                url: `/quests`,
                method: 'POST',
                body: quest
            }),
            invalidatesTags: ['Quest']
        }),
        updateQuest: build.mutation<IQuest, IQuest>({
            query: (quest) => ({
                url: `/quests/${quest.id}`,
                method: 'PUT',
                body: quest
            }),
            invalidatesTags: ['Quest']
        }),
        deleteQuest: build.mutation<IQuest, number>({
            query: (questId) => ({
                url: `/quests/${questId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Quest']
        }),
    })
})

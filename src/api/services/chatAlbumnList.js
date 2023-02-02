import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./commonHeader";

export const chatAlbumnListApi = createApi({
    reducerPath: 'chatAlbumnListApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder)=> ({
        getChatAlbumnList: builder.query({
            query: (params) => ({
                url: `/chat/list/private?uid=${params.myIdx}&channel=fc:${params.chatIdx}:${params.myIdx}&cursor=&limit=40&type=media`
            }),
            keepUnusedDataFor: 1,
        })
    })
    

})

export const {useGetChatAlbumnListQuery} = chatAlbumnListApi
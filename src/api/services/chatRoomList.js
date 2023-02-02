import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./commonHeader";

export const chatRoomListApi = createApi({
    reducerPath: 'chatRoomListApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder)=> ({
        getChatRoomList: builder.query({
            query: (params) => ({
                url: `/chat/list/private?uid=${params.myIdx}&channel=fc:${params.chatIdx}:${params.myIdx}&cursor=&limit=40`
            }),
            keepUnusedDataFor: 1,
        })
    })
    

})

export const {useGetChatRoomListQuery} = chatRoomListApi
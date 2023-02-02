import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./commonHeader";

export const chatListApi = createApi({
    reducerPath: 'chatListApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder)=> ({
        getChatList: builder.query({
            query: (params) => ({
                url: `/chat/list/channel?uid=${params.idx}&read=all&status=on&sort=new&limit=40`
            })  
        })
    })
})

export const {useGetChatListQuery} = chatListApi

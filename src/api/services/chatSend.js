import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'


export const sendApi =  createApi({
    reducerPath: 'sendApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder)=> ({
        send: builder.mutation({
            query: (paramBody)=> ({
                url: `/chat/pub/private`,
                method: 'POST',
                body:paramBody
            }),
        })
    }),
    overrideExisting: false
})

export const {useSendMutation} = sendApi
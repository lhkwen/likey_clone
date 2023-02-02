import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'

export const creatorPostApi = createApi({
    reducerPath: 'creatorPostApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getCreatorPost: builder.query({
            query: (params) => ({
                    url:`/v1/users/${params.idx}/posts?offset=${params.offset}&limit=${params.limit}&contenttype=`,
                }),
        })   
    })
})

export const {useGetCreatorPostQuery} = creatorPostApi
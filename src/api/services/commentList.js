import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'


export const commentListApi = createApi({
    reducerPath: 'commentListApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getCommentList: builder.query({
            query: (params) => ({
                url: `v1/posts/${params.idx}/comments?limit=${params.limit}&offset=${params.offset}`
            })
        })
    })
})

export const {useGetCommentListQuery} = commentListApi
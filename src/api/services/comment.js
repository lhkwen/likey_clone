import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'

export const commentApi = createApi({
    reducerPath: 'commentApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder)=>({
        comment: builder.mutation ({
            query: (postBody) => ({
                url: `v1/posts/${postBody.idx}/comments`,
                method: 'POST',
                body: {commentdesc: postBody.commentdesc}
            }),
        })
    }),
    overrideExisting: false
})

export const { useCommentMutation } = commentApi
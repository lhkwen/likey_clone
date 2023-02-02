import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from "./commonHeader";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getPost: builder.query({
            query: (params) => {
                console.log(params);
                return{
                   url: `v1/posts/${params.postNum}`
                }
            }
        })
    })
})

export const {useGetPostQuery} = postApi
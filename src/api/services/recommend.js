import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'


export const recommendApi = createApi ({
    reducerPath: 'recommendApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getRecommand: builder.query({
            query: (params) => ({
                    url: `creator/recommends?uid=${params.idx}&limit=15`
                })
        })
        
    })
})

export const {useGetRecommandQuery} = recommendApi
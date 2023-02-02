import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'

export const membershipApi = createApi({
    reducerPath: 'membershipApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getMembership: builder.query({
            query: (params) => ({
                    url: `/v1/creators/${params.idx}/subscriptions`
            })
        })
        
    })
})

export const {useGetMembershipQuery}= membershipApi
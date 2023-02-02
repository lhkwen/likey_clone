import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithAuth } from './commonHeader'

export const creatorApi = createApi({
    reducerPath: 'creatorApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getCreator : builder.query({
            query: (params) => ({
                url: `v1/profiles/${params.profile_id}/by/profileid`
            })
        })
    })
})

export const {useGetCreatorQuery} = creatorApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from 'src/config/propertySetting'


export const loginApi  = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: BASE_URL
    }),
    endpoints: (builder)=> ({
        login: builder.mutation({
            query: (postBody)=> ({
                url: '/v1/accounts/login',
                method: 'POST',
                body: postBody
            }),
        })
    }),
    overrideExisting: false

})

export const { useLoginMutation } = loginApi
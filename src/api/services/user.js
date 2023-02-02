import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from "src/config/propertySetting";

export const userApi  = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const state = getState();
            const token = state.auth.accessToken;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers;
        },
    }),
    endpoints: (builder)=> ({
        userMe: builder.mutation({
            query: ()=> ({
                url: `/v1/users/me`,
                method: 'POST',
                // credentials: 'include'
            }),
        })
    }),
    overrideExisting: false

})

export const { useUserMeMutation } = userApi
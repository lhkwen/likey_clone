
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from "src/config/propertySetting";


const baseQuery = fetchBaseQuery({
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
})

const refreshQuery  =  fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
        console.log(headers,{ getState })
        const state = getState();
        const token = state.auth.refreshToken;
        console.log('Retoken',token)
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    },
})

export const baseQueryWithAuth = async (args,api, extraOptions) => {
    const result = await baseQuery(args,api, extraOptions);
    if(result?.error?.status === 401) {
        console.log('토큰');
        const refreshResult = await(refreshQuery('/v1/accounts/token_new',api,{method: 'POST',body: JSON.parse(localStorage.getItem('refreshToken'))}));
     //   const refreshResult = await(refreshApi); 
        console.log('refreshResult',refreshResult);
        
    }
    return result;
}

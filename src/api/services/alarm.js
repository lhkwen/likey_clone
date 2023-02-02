import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./commonHeader";

export const alarmApi = createApi({
    reducerPath: 'alarmApi',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder)=> ({
        getAlarm: builder.query({
            query: (params) => {
               console.log('params',params);
                return{ url: `/v1/notification?limit=20&offset=${params.offset}&type=ALL`,
                }
            }
        })
    })
})

export const {useGetAlarmQuery} = alarmApi
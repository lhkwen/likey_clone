import React from "react";
import { useGetAlarmQuery } from "src/api/services/alarm";
import AlarmCard from "../organism/AlarmCard";

const AlarmContent = () => {
    const {data, isSuccess} =  useGetAlarmQuery();
   console.log(data);
    return(
        <>
            {isSuccess && 
                (<AlarmCard/>)
            }
        </>
    )
}

export default AlarmContent;
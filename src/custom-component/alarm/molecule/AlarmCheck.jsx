import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useCallback , useState } from "react";

import DateManager from "src/utils/DateManager";



const AlarmCheck = ({data,alarmData,idx}) => {


     const DateCheck = useCallback(
        (index, createdAt) => {
           
            const current = dayjs(createdAt).format('YYYYMMDD');
            const today = dayjs(new Date()).format('YYYYMMDD');
            if((index===0) && (current===today)) {
                return (<Typography variant="h6" sx={{paddingLeft: '15px', paddingTop:'5px'}}>오늘</Typography>);
            }
            if((index===0) && (current!==today)) {
                return (<Typography variant="h6" sx={{paddingLeft: '15px', paddingTop:'5px'}}>이전</Typography>);
            }
            if(current===today) {
                return null;
            }
            if(current!==today) {
                if(today === dayjs(data[index-1].create_at).format('YYYYMMDD')) {
                    return (<><Typography variant="h6" sx={{paddingLeft: '15px', paddingTop:'5px'}}>이전</Typography> <Divider/></>);
                }
                return null;
            }
            return null;
        },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [alarmData]
    );

    return(
        <>
            {DateCheck(idx,alarmData.create_at)}
        </>
    )
}

export default AlarmCheck;
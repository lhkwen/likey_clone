import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useMemo, useState } from "react";
import { useGetAlarmQuery } from "src/api/services/alarm";
import AlarmCase from "../organism/AlarmCase";
import AlarmCheck from "../organism/AlarmCheck";
import AlarmTime from "../organism/AlarmTime";

const AlarmCard = () => {

    const [poffset, setOffset] = useState('');
    const [list, setList] = useState([]);
    console.log('poffset',poffset)
    const {data, isSuccess, isFetching} = useGetAlarmQuery({
        offset:poffset,
    });

    const onScroll = () => {
        const scrolledBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
        if(scrolledBottom && !isFetching) {
            console.log(data.data.length);
            setOffset(data.data[data.data.length-1].noti_idx);
            window.scrollTo(0,document.documentElement.scrollTop-1);
        }
    }

    useEffect(()=> {
        document.addEventListener("scroll", onScroll);
       // console.log(data.data);
        if(isSuccess) {
        setList(prev => [...prev, ...data.data])
        }
        return function () {
        document.removeEventListener("scroll", onScroll);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[poffset,isFetching])

    return(
        <>
            {list.map((alarmData,idx)=>(
                <React.Fragment key={alarmData.noti_idx}>
                    <AlarmCheck data={list} alarmData={alarmData} idx={idx} />
                    <Box sx={{ padding: '15px'}}>
                        <Avatar sx={{float: 'left'}} alt="" src={alarmData.profileimg_url} >
                            R
                        </Avatar>
                        <Typography variant="body2" sx={{fontWeight: 'bold', marginLeft: '10px', float: 'left'}}>{alarmData.nick}</Typography>
                        <Typography variant="body2" sx={{float: 'left'}}><AlarmCase alarmCase={alarmData.alarmCase} /></Typography>
                        <Typography variant="body2" sx={{color: 'grey', float: 'left'}}><AlarmTime time={alarmData.time} timeType={alarmData.timetype}/></Typography>
                    </Box>
                </React.Fragment>
            ))}
        </>
    )
}

export default AlarmCard;
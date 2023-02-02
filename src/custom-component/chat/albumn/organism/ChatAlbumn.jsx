import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useState , useRef, useMemo } from "react"

import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "src/redux/userSlice";
import ChatAlbumnLock from "./ChatAlbumnLock";

function ChatAlbumn ({msgData,setMsgData,targetInfo}) {

    const user=useSelector(selectUser);
    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
    const imgStyle = useMemo(()=> ({
     //   position: 'absolute, top:0, left:0',
        width: '100%',
        height: '100%',
    }),[])
    console.log(msgData)
    return(
            <Box sx={{width: '25%',height:'150px'}}>
            {(msgData?.media.permission_code ==='NEEDCONTBUY' || msgData?.media.permission_code ==='NEEDBUY' || msgData?.media.permission_code ==='SALESEXPIRED')?
                <ChatAlbumnLock data={msgData}/>:<img style={imgStyle} alt="" src={msgData?.media.contents[0].poster_path}/>
            }
            </Box>
           
    )
}

export default ChatAlbumn;
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTarget } from "src/redux/targetSlice";
import ChatRoom from "./ChatRoom";


const ChatContent = () => {
    const target = useSelector(selectTarget);
    const navigate =  useRouter();
    if(target.target===null){
        console.log('강제이동');
        navigate.push('/chat')
    }
    console.log(target);
    return(
        <>
        {target.target!==null && (<ChatRoom
                target={target}
            />)}
        </>
    )   
}

export default ChatContent;
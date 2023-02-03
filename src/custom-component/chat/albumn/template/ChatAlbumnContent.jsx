import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTarget } from "src/redux/targetSlice";
import ChatAlbumnRoom from "../organism/ChatAlbumnRoom";


const ChatAlbumnContent = () => {
    const target = useSelector(selectTarget);
    const navigate =  useRouter();
    if(target.target===null){
        navigate.push('/chat')
    }
    console.log(target);
    return(
        <>
        {target.target!==null && (<ChatAlbumnRoom
                target={target}
            />)}
        </>
    )   
}

export default ChatAlbumnContent;
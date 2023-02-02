import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTarget } from "src/redux/targetSlice";


const ChatLoby = () => {
    const target = useSelector(selectTarget);
    return(
        <Box sx={{textAlign: 'center', width: '100%', height: '100%', display: 'flex', justifyContent : 'center', alignItems : 'center'}}><Typography variant="h6">채팅방을 선택해주세요.</Typography> </Box>
    )   
}

export default ChatLoby;
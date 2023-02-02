import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetChatAlbumnListQuery } from "src/api/services/chatAlbumnList";
import { selectMsgInfo } from "src/redux/msgSlice";
import { selectUser } from "src/redux/userSlice";
import ChatAlbumn from "./ChatAlbumn";
import Header from "../organism/Header";

const ChatAlbumnRoom = ({target}) => {
    const user = useSelector(selectUser);
    const {data: msgData, isSuccess: msgSuccess, isFetching} = useGetChatAlbumnListQuery({
        chatIdx: target.target.target,
        myIdx:user.user.user_idx
    });
    const [list, setList] = useState([]);
    console.log('앨범',msgData);
    return(
        <>
            <Header />
            <Box sx={{overflowY: 'auto', width:'100%',display: 'flex',flexWrap: 'wrap'}}>
                {msgSuccess && (msgData.data.map((albumnData,idx)=> (
                    <React.Fragment key = {albumnData.msg_idx}>
                        <ChatAlbumn msgData={albumnData}/>
                    </React.Fragment>
                )))}
            </Box>
            
        </>
    )
}

export default ChatAlbumnRoom;
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetChatRoomListQuery } from "src/api/services/chatRoomList";
import { selectMsgInfo } from "src/redux/msgSlice";
import { selectUser } from "src/redux/userSlice";
import ChatDetail from "../organism/ChatDetail";
import ChatInputBox from "../organism/ChatInputBox";
import ChatTab from "../organism/ChatTab";
import Header from "../organism/Header";

const ChatRoom = ({target}) => {
    const user = useSelector(selectUser);
    const {data: msgData, isSuccess: msgSuccess, isFetching} = useGetChatRoomListQuery({
        chatIdx: target.target.target,
        myIdx:user.user.user_idx
    });
    const [list, setList] = useState([]);
    const msg = useSelector(selectMsgInfo);


    console.log('dddd',list);
    useEffect(()=>{
        // if(isFetching){
        //     console.log('패킹');
        // }
        if(msgSuccess){
            console.log('체킹');
            console.log(msgData)
            setList(msgData.data);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[msgSuccess])

    return(
        <>
            <Header />
            <ChatTab />
            {msgSuccess && (<ChatDetail msgData={list} setMsgData={setList} targetInfo={msgData.target_info} msgSuccess={msgSuccess} />)}
            <ChatInputBox />
            
        </>
    )
}

export default ChatRoom;
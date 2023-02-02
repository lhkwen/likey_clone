import { Box } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import { useGetRecommandQuery } from "src/api/services/recommend"
import { selectUser } from "src/redux/userSlice"
import SubItem from "src/custom-component/subscribe/organism/SubItem";
import { useGetChatListQuery } from "src/api/services/chatList"
import Header from "../organism/Header"
import ChatItem from "../organism/ChatItem"
import RecommandHeader from "../organism/RecommandHeader"

// eslint-disable-next-line arrow-body-style
const ChatList = () => {
    const user = useSelector(selectUser);
    const {data: rcmData, isSuccess: rcmSuccess} = useGetRecommandQuery({
        idx:user.user.user_idx
    });
    const {data: chatListData, isSuccess: chatSuccess} = useGetChatListQuery({
        idx:user.user.user_idx,
    })
    return(
        <>
            <Header/>
            {chatSuccess && (
                <ChatItem 
                    chatData={chatListData}
                />
            )}
            <Box sx={{paddingTop: '5px'}} />
            <RecommandHeader />
            {rcmSuccess && (
             <SubItem subData={rcmData} />
           )} 
        </>
    )
}

export default ChatList
import { Card } from "@mui/material";
import React from "react";
import ChatCrad from "./ChatCrad";

// eslint-disable-next-line arrow-body-style
const ChatItem = ({chatData}) => {
    
    return(
        <Card sx={{maxwidth: '100%'}}>
            {chatData.data.map((chatListData,idx)=>(
                <React.Fragment key={chatListData.target}>
                    <ChatCrad 
                        chatData={chatListData}
                        />
                </React.Fragment>
            ))}
        </Card>
    )
}

export default ChatItem
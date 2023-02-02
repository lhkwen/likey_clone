import { Box } from "@mui/material";
import React, { useState } from "react";
import ChatList from "src/custom-component/chat/left/template/ChatList";
import ChatContent from "src/custom-component/chat/right/template/ChatContent";
import ChatLoby from "src/custom-component/chat/right/organism/ChatLoby";
import withAuth from "src/hooks/withAuth";
import ChatLayout from "src/layouts/chat/ChatLayout";
import styles from 'src/layouts/CSSModule.module.css';
// eslint-disable-next-line arrow-body-style
const Chat = () => {
    return(
        <ChatLayout>
            <Box sx={{width: '500px', height: '100%', overflowY: 'auto'}} className={styles.ChatLobyList}>
                <ChatList 
                />
            </Box> 
            <Box sx={{width: '800px', height: '100%', overflowY: 'auto'}} className={styles.ChatLoby}>
                <ChatLoby />
                {/* <ChatContent 
                    selectRooms={selectRooms}
                    setSelectRooms={setSelectRooms}
                /> */}
            </Box>
        </ChatLayout>
    );
}

export default withAuth(Chat)
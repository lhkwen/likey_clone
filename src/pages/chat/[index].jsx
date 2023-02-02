import { Box } from "@mui/material";
import React, { useState } from "react";
import ChatList from "src/custom-component/chat/left/template/ChatList";
import ChatContent from "src/custom-component/chat/right/template/ChatContent";
import withAuth from "src/hooks/withAuth";
import ChatLayoutRoom from "src/layouts/chat/ChatLayoutRoom";
import styles from 'src/layouts/CSSModule.module.css';
// eslint-disable-next-line arrow-body-style
const ChatPrivate = () => {
    return(
        <ChatLayoutRoom >
            <Box sx={{width: '500px', height: '100%', overflowY: 'auto'}} className={styles.ChatList}>
                <ChatList 
                />
            </Box> 
            <Box sx={{width: '800px', height: '100%',  position:'relative'}} className={styles.ChatContent}>
                <ChatContent 
                />
            </Box>
        </ChatLayoutRoom>
    );
}

export default withAuth(ChatPrivate)
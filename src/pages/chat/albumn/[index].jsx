import { Box } from "@mui/material";
import React from "react";
import ChatAlbumnContent from "src/custom-component/chat/albumn/template/ChatAlbumnContent";
import ChatList from "src/custom-component/chat/left/template/ChatList";
import withAuth from "src/hooks/withAuth";
import ChatLayoutRoom from "src/layouts/chat/ChatLayoutRoom";
import styles from 'src/layouts/CSSModule.module.css';
// eslint-disable-next-line arrow-body-style
const albumn = () => {
    return(
        <ChatLayoutRoom>
            <Box sx={{width: '500px', height: '100%', overflowY: 'auto'}} className={styles.ChatList}>
                <ChatList 
                />
            </Box> 
            <Box sx={{width: '800px', height: '100%', overflowY: 'auto', overflowX: 'hidden'}} className={styles.ChatContent}>
                <ChatAlbumnContent />
                {/* <ChatContent 
                    selectRooms={selectRooms}
                    setSelectRooms={setSelectRooms}
                /> */}
            </Box>
        </ChatLayoutRoom>
    )
}

export default withAuth(albumn);
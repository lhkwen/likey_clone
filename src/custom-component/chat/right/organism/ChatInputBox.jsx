import { Box, IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react"
import SendIcon from '@mui/icons-material/Send';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useSendMutation } from "src/api/services/chatSend";
import { useDispatch, useSelector } from "react-redux";
import { selectTarget } from "src/redux/targetSlice";
import { selectUser } from "src/redux/userSlice";
import { setSendInfo } from "src/redux/sendSlice";
import { setSendFlg } from "src/redux/sendFlgSlice";

const ChatInputBox = () => {
    const [inputValue, setInputValue] = useState('');
    const inputChangeEvent = (e) => {
        setInputValue(e.target.value);
    }
    const target = useSelector(selectTarget);
    const user = useSelector(selectUser);
    const [send, {data: sendData, isSuccess: sendSuccess}] = useSendMutation();
    const dispatch = useDispatch();
    const sendEvent = async() => {
        console.log('?');
        await send({
            channel: `fc:${target.target.target}:${user.user.user_idx}`,
            message: inputValue,
            target: target.target.target,
            uid: user.user.user_idx,
        });

        const obj = {
            chat_status: 'Y',
            contpkgseq: null,
            created_at: Date.now(),
            group_id: "false",
            message: inputValue,
            message_type: 'text',
            msg_idx: Date.now(),
            msg_value: 0,
            receiver: target.target.target,
            sender: user.user.user_idx,
            spon_value: 0,
        };

        // dispatch(setMsgInfo((old)=>[...old,obj]));
        dispatch(setSendFlg({sendFlg:true}));
        dispatch(setSendInfo({sendInfo:obj}));

        setInputValue('');
    }
    const presentEvent = () => {

    }
    return(
        <Box sx={{position: 'absolute', bottom:0, width: '100%'}}>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    
            >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={presentEvent} disabled={inputValue.length===0}>
                    <CardGiftcardIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="구독 후 메시지를 보낼 수 있습니다."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    value={inputValue}
                    onChange={inputChangeEvent}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={sendEvent} disabled={inputValue.length===0}>
                    <SendIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}
export default ChatInputBox
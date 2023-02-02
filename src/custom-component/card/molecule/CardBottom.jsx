import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useCommentMutation } from "src/api/services/comment";
import { useSelector } from "react-redux";
import { selectPost } from "src/redux/postSlice";


export default function CardBottom ({commentData,setCommentData}) {
    const post = useSelector(selectPost)
    const [inputValue, setInputValue] = useState('');

    const sendEvent = async(e) => {
       await send({idx:post.post.post_idx,commentdesc:inputValue});
    }
    const styleObj = {
        position: 'absolute',
        bottom: '0px',
        width: '20%',
    }

    const inputChangeEvent = (e) => {
        setInputValue(e.target.value);
    }

    const [send, {data: sendData, isSuccess: isSendSuccess}] = useCommentMutation();
    useEffect(()=> {

        if(isSendSuccess) {
            const array = [];
            array.push(sendData.data);
            setCommentData(prev=> [...prev, ...array]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSendSuccess])
    
    return(
        <div style={styleObj}>
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
    
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="포스트를 열고 댓글을 작성하세요."
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={inputChangeEvent}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={sendEvent} disabled={inputValue.length===0}>
                    <SendIcon />
                </IconButton>
            </Paper>
        </div>
    )
}

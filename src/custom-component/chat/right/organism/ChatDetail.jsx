import { Avatar, Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useState , useRef } from "react"

import { useDispatch, useSelector } from "react-redux";
import { selectMsgInfo } from "src/redux/msgSlice";
import { selectReceiveFlg, setReceiveFlg } from "src/redux/receiveFlgSlice";
import { selectSendFlg, setSendFlg } from "src/redux/sendFlgSlice";
import { selectSendInfo } from "src/redux/sendSlice";
import { selectUser } from "src/redux/userSlice";
import DateManager from "src/utils/DateManager";

function ChatDetail ({msgData,setMsgData,targetInfo,msgSuccess}) {
    const focusTarget = useRef();

    focusTarget.current?.scrollIntoView({ behavior: 'smooth' });
    const user=useSelector(selectUser);
    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }

    const DateCheck = useCallback(
        (idx, createdAt) => {
        const current = dayjs(createdAt).format('YYYYMMDD');
        
        // 최신
        if(idx===msgData.length+1) {
            return true;
        }
        // 과거
        const prev = dayjs(msgData[idx + 1]?.created_at).format(
        'YYYYMMDD',
        );
        if(current === prev) {
            return false;
        }
        return true; 
        },
        [msgData],
    );
    const dispatch = useDispatch();
    const msg = useSelector(selectMsgInfo);
    const sendMsg = useSelector(selectSendInfo);
    const sendFlg = useSelector(selectSendFlg);
    const receiveFlg = useSelector(selectReceiveFlg);
    useEffect(()=>{
        if(msgSuccess){
            setMsgData(msgData);
        }
        console.log('rece',receiveFlg.receiveFlg);
        console.log('send',sendFlg.sendFlg)
        if(receiveFlg.receiveFlg) {
            const obj = {...msg};
            const array=[...msgData];
            array.unshift(obj.msgInfo)
            setMsgData(array);
          //  dispatch(setSendFlg({sendFlg:false}));
            dispatch(setReceiveFlg({receiveFlg:false}));

        }
        if(sendFlg.sendFlg) {
            
            const obj = {...sendMsg};
            const array=[...msgData];
            array.unshift(obj.sendInfo)
            setMsgData(array);
            console.log(array);
            dispatch(setSendFlg({sendFlg:false}));
        }
    focusTarget.current?.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[msg,sendMsg,msgSuccess])
    console.log('msg',msgData)
    return(
        <Box sx={{marginLeft:'15px', marginRight:'15px' ,overflowY: 'auto', height: '85%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column-reverse'}}>
                {msgData.map((chatData, idx)=> (
                    <React.Fragment key={chatData.msg_idx}>

                        {+user.user.user_idx !== +chatData.sender ? (
                            <Box sx={{display: 'flex' , marginTop:'15px'}} >
                                <Avatar style={boxStyle} src={targetInfo.profileimg_url} alt="" sx={{width:'30px', height:'30px', position:'relative'}}/>
                                <Box sx={{maxWidth:'250px', background:'#F3F3F9',borderRadius: '10px',paddingTop: '5px',paddingBottom:'5px',paddingLeft:'15px',paddingRight:'15px',position:'relative'}}>
                                    <Typography style={boxStyle} variant="body2">{chatData.message}</Typography>
                                </Box>
                                <Typography style={boxStyle} variant="body2">{DateManager.convert(chatData.created_at,'aa/pp')}</Typography>
                            </Box>
                            ):(
                            <Box sx={{display: 'flex',  justifyContent: 'end',marginTop:'15px'}} >
                                <Typography style={boxStyle} variant="body2">{DateManager.convert(chatData.created_at,'aa/pp')}</Typography>
                                <Box sx={{maxWidth:'250px', background:'#2D2B40', color:'white',borderRadius: '10px',paddingTop: '5px',paddingBottom:'5px',paddingLeft:'15px',paddingRight:'15px',position:'relative'}}>
                                    <Typography style={boxStyle} variant="body2">{chatData.message}</Typography>
                                </Box>
                                
                            </Box>
                            )
                        }
                        {DateCheck(idx, chatData.created_at) && (
                            <Box sx={{textAlign: 'center', marginTop: '15px', fontSize: '12px'}}>
                                <span>{DateManager.convert(chatData.created_at,'년/월/일')}</span>
                            </Box>
                        )}
                        
                    </React.Fragment>
                ))}
                
            </Box>
            <Box ref={focusTarget} sx={{textAlign:'center' ,marginTop:'20px'}}>
            <Typography variant="body2">[경고] 크리에이터의 메시지를 무단으로 저장하거나 유포한 경우 민형사 소송이 발생할 수 있으며, 처벌 받을 수 있습니다.</Typography> 
            </Box>
        </Box>
    )
}

export default ChatDetail;
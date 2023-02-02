import { Avatar, Button, Card, CardHeader } from "@mui/material";
import React, { useMemo } from "react";
import { red } from '@mui/material/colors';

export default function CardReply ({commentData}) {
    const styleObj = useMemo(()=>({
    //    width: '80%',
        marginLeft : '17%',
     //   height: '100%',
        textAlign: 'left',
        fontSize: '14px',
    }),[]);
    const floatObj = useMemo(()=>({
        float: 'left',
    }),[]);
    const replyEvent = async() => {
     
    }

    return(
        <Card sx={{ maxWidth: '100%'}}>
            <CardHeader
                avatar={
                <Avatar alt="" src={commentData.profileimg_url} >
                    R
                </Avatar>
                }
                title={commentData.nick}
                subheader={commentData.commentdesc}
                titleTypographyProps={{variant:'subtitle1' }}
                subheaderTypographyProps={{variant:'subtitle2'}}
            />
            <div style={styleObj}>
                <div style={floatObj}>7시간전&nbsp;&nbsp;&nbsp;</div>
                <div style={floatObj} onClick={replyEvent}>답글달기</div>
            </div>
                
        </Card>
    )
}
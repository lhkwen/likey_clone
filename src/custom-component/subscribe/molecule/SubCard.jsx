import { Avatar, Button, Card, CardHeader, Hidden, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from "next/router";


const SubCard = ({subData}) => {
    const navigate = useRouter();
    const [btnVaule, setBtnVaule] = useState(true);
    const followEvent = (e) => {
        setBtnVaule(false);
        console.log(e);
    }
    const idChange = (nick) => {
        if (nick.length > 9) {
            return `${nick.substr(0, 8)}...`;
        }
        return nick;
    };
    const styleObj = {
        width: '80%',
        marginLeft : '80px',
     //   height: '100%',
        textAlign: 'left',
        fontSize: '14px',
    }
    const clickEvent = () => {
        navigate.push(`/creator/${subData.profile_id}`);
    }
    return(
        <>
            <CardHeader
                avatar={
                <Avatar alt="" src={subData.profile_img} onClick={clickEvent}>
                    R
                </Avatar>
                }
                action={
                    <Button onClick={followEvent} disabled={!btnVaule}>{btnVaule ? '팔로우': '팔로잉'}</Button>
                }
                title={idChange(subData.nick)}
                subheader={subData.profile_id}
                titleTypographyProps={{variant:'subtitle1' }}
                subheaderTypographyProps={{variant:'subtitle2'}}
                
                sx={{cursor:'pointer'}}
            />
            <div style={styleObj}>
                {/* {recommandData.profile_desc} */}
            </div>
        </>
    )
}

export default SubCard;
import { Avatar, Button, CardHeader } from "@mui/material"
import { useRouter } from "next/router";
import React, { useState  } from "react"


const RecommandCard = ({
    recommandData
}) => {
    const [btnVaule, setBtnVaule] = useState(true);
    const navigate = useRouter();
    const followEvent = (e) => {
        setBtnVaule(false);
    }

    const idChange = (nick) => {
        if (nick.length > 9) {
            return `${nick.substr(0, 8)}...`;
        }
        return nick;
    };

    const clickEvent = () => {
        navigate.push(`/creator/${recommandData.profile_id}`);
    }

    return(    
        <CardHeader
            avatar={
            <Avatar alt="" src={recommandData.profile_img} onClick={clickEvent}>
                R
            </Avatar>
            }
            action={
                <Button onClick={followEvent} disabled={!btnVaule}>{btnVaule ? '팔로우': '팔로잉'}</Button>
            }
            title={idChange(recommandData.nick)}
            subheader={recommandData.profile_id}
            titleTypographyProps={{variant:'subtitle1' }}
            subheaderTypographyProps={{variant:'subtitle2'}}
            
            sx={{cursor:'pointer'}}
        />
        )
    }

export default RecommandCard
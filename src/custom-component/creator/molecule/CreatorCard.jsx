import { Avatar, Button, Typography } from "@mui/material";
import React, { useMemo } from "react"
import SendIcon from '@mui/icons-material/Send';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "src/redux/userSlice";
import { setTarget } from "src/redux/targetSlice";

const CreatorCard  = ({data}) => {
    const user = useSelector(selectUser);
    const navigate = useRouter();
    const dispatch = useDispatch();
    const msgClick = () => {
    console.log(data)
        dispatch(setTarget({
            target: {
                nick: data.nick,
                profileimg_url: data.profileimg_url,
                target:data.user_idx,
                profile_id:data.profile_id
            }
        }))
        // profileimg_url nick user_idx profile_id
        navigate.push(`/chat/${data.nick}`)
    }
    const boxStyle = useMemo(()=> ({
        width:'100%',
        height:'250px',
        position: 'relative',
    }),[])
    const imgStyle = useMemo(()=> ({
        position: 'absolute',
        width: '75px',
        height: '75px',
        top:'-35px',
        left:'15px'
    }),[])
    const topBtnStyle = useMemo(()=> ({
        position: 'absolute',
        top:'10px',
        right: '15px'
    }),[]);
    const titleStyle = useMemo(()=> ({
        position: 'absolute',
        top:'50px',
        left: '10px'
    }),[]);
    const subtitleStyle = useMemo(()=> ({
        position: 'absolute',
        top:'80px',
        left: '10px'
    }),[]);
    const contentStyle  = useMemo(()=> ({
        position: 'absolute',
        top:'110px',
        left: '10px'
    }),[]);
    const subtitleTyStyle = useMemo(()=> ({
        float:'left',
    }),[])

    const buttonStyle = useMemo(()=> ({
        position: 'absolute',
        bottom: '0',
        width: '350px',
        height: '50px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 100%)'
    }),[]);

    const subEvent = () => {
        navigate.push('/pay');
    }
    return(
        <div style={boxStyle}>
            <div>
                <Avatar alt="" src={data?.profileimg_url} style={imgStyle}>
                    R
                </Avatar>
                <Button startIcon={<SendIcon />} variant="outlined" style={topBtnStyle} onClick={msgClick}> 메시지 </Button>
            </div>
            <div style={titleStyle}>
                <Typography variant="h6" >
                    {data?.nick}
                </Typography>
                
                
            </div>
            <div style={subtitleStyle}>
                <Typography style={subtitleTyStyle} variant="subtitle2" >@{data?.profile_id}&nbsp;・&nbsp;</Typography>
                <Typography style={subtitleTyStyle} variant="subtitle2" >{data?.follower_count}팔로워&nbsp;・&nbsp;</Typography>
                <Typography style={subtitleTyStyle} variant="subtitle2" >{data?.posttotal_count}포스트&nbsp;&nbsp;</Typography>
                
            </div>
            <div style={contentStyle}>
                <Typography variant="body">{data?.profiledesc}</Typography>
                
            </div>
                <Button style={buttonStyle} variant="outlined" onClick={subEvent}> 구독하기 </Button>
            
        </div>
    )
}

export default CreatorCard
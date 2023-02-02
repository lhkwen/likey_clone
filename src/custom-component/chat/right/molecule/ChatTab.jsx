import { Avatar, Box, CardHeader, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTarget } from "src/redux/targetSlice";
import VideocamIcon from '@mui/icons-material/Videocam';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AppDialog from "src/custom-component/dialog/molecule/AppDialog";
import { useRouter } from "next/router";

const ChatTab = () => {
    const [moreFlg, setMoreFlg] = useState(false);
        const target = useSelector(selectTarget);
        const videoClickEvent = () => {
            setMoreFlg(true);
        }
    const navigate =  useRouter();
    const albumnEvent = () => {
        navigate.push(`/chat/albumn/${target.target.nick}`);
    }
    return(
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer'
            }}>
                <Box sx={{width: '100%', padding: '15px 15px 15px 15px' }} onClick={albumnEvent}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Avatar alt="" src={target.target.profileimg_url} sx={{width: '30px', height:'30px'}}>
                            R
                        </Avatar>
                        <Typography variant="body2" sx={{paddingTop: '5px'}}>{target.target.nick}</Typography>
                    </Box>
                </Box>  
               
                <Divider orientation="vertical" flexItem />
                <Box sx={{width: '100%'}} onClick={videoClickEvent}>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <VideocamIcon />
                        <Typography variant="body2">영상통화</Typography>
                        <FavoriteBorderIcon />
                        1000/분
                    </Box>
                    
                </Box>
            </Box>
            <Divider />
            {moreFlg && (<AppDialog 
                moreFlg = {moreFlg}
                setMoreFlg = {setMoreFlg}
            />)}
        </>
    )
}

export default ChatTab;
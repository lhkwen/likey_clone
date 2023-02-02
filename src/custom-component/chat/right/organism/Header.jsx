import { Avatar, Box, Button, CardHeader, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChatDialogFlg } from "src/redux/chatDialogSlice";
import { selectTarget } from "src/redux/targetSlice";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const target = useSelector(selectTarget);
    const navigate = useRouter();
    const dispatch = useDispatch();
    const historyGo = () => {
        navigate.back();
    }

    const rightMenuEvent = () => {
        dispatch(setChatDialogFlg({chatDialogFlg:true}))
    }
    return(
    <>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
           <Button onClick={historyGo}>&lt; </Button>
           <CardHeader
                avatar={
                <Avatar alt="" src={target.target.profileimg_url}>
                    R
                </Avatar>
                }
                title={target.target.nick}
                titleTypographyProps={{variant:'subtitle1' }}
                sx={{padding: '15px 15px 15px 15px'}}
           />
           
           <Button onClick={rightMenuEvent}><MenuIcon onClick={rightMenuEvent}/></Button>
        </Box>
        <Divider/>
    </>    
    )
}
export default Header;
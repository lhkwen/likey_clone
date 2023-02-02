import { Avatar, Box, Button, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React, { use, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "src/redux/userSlice";
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProfileCard = () => {
    const user = useSelector(selectUser);
    const middleStyle = useMemo(()=> ({
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px',
    }),[])
    
    const imgSize = useMemo(()=> ({
        display: 'initial',
        width: '20%',
        height: '50%',
    }),[])

    const btnSize = useMemo(()=> ({
        marginTop: '5px',
    }),[])

    return(
        <Box sx={{ width: '100%'}}>
            <div style={middleStyle}>
                {/* <Avatar alt="" src={user.user.profileimg_url} style={imgSize}>
                    R
                </Avatar> */}
                <img src={user.user.profileimg_url} alt="" style={imgSize}/>
                <br />
                <Typography variant='h6'>
                    {user.user.nick}
                </Typography>
                <Typography variant='subtitle'>
                    {user.user.profile_id}
                </Typography>
                <br />
                <Button variant="outlined" style={btnSize}>프로필편집</Button>
            </div>
           <List sx={{width:'100%'}} >
                <ListItem >
                    <ListItemButton  sx={{display: 'flex', justifyContent: "space-between"}} key="1">
                        <Typography  variant="subtitle2" >팔로잉</Typography>
                        <div>{user.user.following_count} &gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton  sx={{display: 'flex', justifyContent: "space-between"}} key="2">
                        
                        <Typography  variant="subtitle2" >하트</Typography>
                        <div><FavoriteIcon sx={{paddingTop: '10px'}}/>{user.user.follower_count} &gt;</div>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default ProfileCard;
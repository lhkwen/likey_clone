import { Avatar, Box, Button, CardHeader, Divider, Grid, List,  ListItem,  ListItemButton,  Switch,  Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo , useState } from 'react';

import styles from 'src/layouts/CSSModule.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'src/redux/userSlice';
import { useRouter } from 'next/router';
import { setChatDialogFlg } from 'src/redux/chatDialogSlice';
import { check } from 'prettier';
import { selectTarget } from 'src/redux/targetSlice';
import ListItemLink from './ListItemLink';



export default function ChatDialogVertical() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const target = useSelector(selectTarget);
    const closeMenu = () => {
        dispatch(setChatDialogFlg({chatDialogFlg:false}))
        // setChatOpen(false);
    }
    const myStyle = useMemo(()=> ({
        paddingLeft: '16px'
    
    }),[])
    const idChange = (nick) => {
        if (nick.length > 9) {
            return `${nick.substr(0, 8)}...`;
        }
        return nick;
    };
    const imgSize = useMemo(()=> ({
        width: '100%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: '70%',
        overflow: 'hidden',
    }),[])

    const [checked , setChecked] = useState(true);

    const clickEvent = () => {
        setChecked(!checked);
        console.log('dfd');
    }

    return(
        <div className={styles.fullScreen}>
            <Box sx={{ width:300, height: '100%', float:'right'}} className={styles.menuScreen}>
                <List aria-label="main mailbox folders">
                    <Grid container justifyContent="space-between" alignItems="center" >
                        <div />
                        <Grid item xs={3} p={1} justifyContent="flex-end">
                            <Button onClick={closeMenu}>X</Button>
                        </Grid>
                    </Grid>
                     <Divider/>
                     <br />
                    <div style={myStyle}>
                        <Typography variant='h6'>
                            채팅방 메뉴
                        </Typography>
                    </div>
                    <br />
                    <Divider/>
                    <ListItem>
                        <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="5" onClick={clickEvent}>
                            <Typography  variant="subtitle2" >알림 받기</Typography>
                            <Switch checked={checked}/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="6" >
                            <Typography  variant="subtitle2" >앨범</Typography>
                            <div>&gt;</div>
                        </ListItemButton>
                    </ListItem>
                    
                    <Divider/>
                    <br />
                    <div style={myStyle}>
                        <Typography variant='h6'>
                            대화상대
                        </Typography>
                         <CardHeader
                            sx={{paddingLeft: '15px'}}
                            avatar={
                            <Avatar alt="" src={user.user.profileimg_url}>
                                R
                            </Avatar>
                            }
                            title={idChange(user.user.nick)}
                            subheader={user.user.profile_id}
                            titleTypographyProps={{variant:'subtitle1' }}
                            subheaderTypographyProps={{variant:'subtitle2'}}
                        />
                         <CardHeader
                            sx={{paddingLeft: '15px'}}
                            avatar={
                            <Avatar alt="" src={target.target.profileimg_url}>
                                R
                            </Avatar>
                            }
                            title={idChange(target.target.nick)}
                            subheader={target.target.profile_id}
                            titleTypographyProps={{variant:'subtitle1' }}
                            subheaderTypographyProps={{variant:'subtitle2'}}
                        />
                    </div>
                    <br />
                    
                    
                    
                </List>


            </Box>
        </div>
    )
}
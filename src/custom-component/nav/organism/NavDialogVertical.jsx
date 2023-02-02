import { Box, Button, Divider, Grid, List,  Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import styles from 'src/layouts/CSSModule.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/userSlice';
import { useRouter } from 'next/router';
import ListItemLink from './ListItemLink';

NavDialogVertical.propTypes = {
    open: PropTypes.bool,
    
}


export default function NavDialogVertical({open, setOpen}) {
    const user = useSelector(selectUser);

    const closeMenu = () => {
        setOpen(false);
    }
    const myStyle = useMemo(()=> ({
        paddingLeft: '16px'
    
    }),[])

    const imgSize = useMemo(()=> ({
        width: '25%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: '70%',
        overflow: 'hidden',
    }),[])

    return(
        <div className={styles.fullScreen}>
            <Box sx={{ width:300, height: '100%'}} className={styles.menuScreen}>
                <List aria-label="main mailbox folders">
                    <Grid container justifyContent="space-between" alignItems="center" >
                        <div> 
                            <Typography variant='h5'>
                             &nbsp; 마이페이지
                            </Typography>
                        </div>
                        <Grid item xs={3} p={1} justifyContent="flex-end">
                            <Button onClick={closeMenu}>X</Button>
                        </Grid>
                    </Grid>
                     <Divider/>
                     <br />
                    <div style={myStyle}>
                        <img src={user.user.profileimg_url} alt="" style={imgSize}/>
                        <br />
                        <Typography variant='h6'>
                            {user.user.nick}
                        </Typography>
                        <Typography variant='subtitle'>
                            {user.user.profile_id}
                        </Typography>
                    </div>
                    <br />
                     <Divider/>
                       <br />
                    
                    <ListItemLink to="/profile" primary="프로필"/>
                    <ListItemLink to="/membership" primary="멤버십"/>
                    <ListItemLink to="/paysetting" primary="결제관리"/>
                    <ListItemLink to="/buy" primary="구매항목"/>
                    <br />
                    <Divider/>
                    <br />
                    <ListItemLink to="/setting" primary="설정" />
                    <ListItemLink to="https://help.likey.me/hc/ko" primary="고객센터" />
                    {/* <ListItemLink to="/dashboard/two" primary="test" icon={<DraftsIcon />}/> */}
                </List>


            </Box>
        </div>
    )
}
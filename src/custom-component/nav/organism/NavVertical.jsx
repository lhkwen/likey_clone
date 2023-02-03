import { Avatar, Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon  from '@mui/icons-material/Home';
import DraftsIcon from '@mui/icons-material/Drafts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUser } from 'src/redux/userSlice';
import { useRouter } from 'next/router';
import ListItemLink from './ListItemLink';
// const menuMove = (link) => {
    
//     console.log("메뉴이동",link);
// }


// function ListItemLink(props) {
//     const {icon, primary, to} = props;
//     return (
//         <li>
//             <ListItemButton  onClick={()=>menuMove(to)} >
//                 {icon?<ListItemIcon>{icon}</ListItemIcon>:null}
//                 <ListItemText primary={primary} />
//             </ListItemButton>
//         </li>
//     )
// }

export default function NavVertical({open, setOpen}) {
    const user = useSelector(selectUser);
    const navigate = useRouter();
    const openMenu = () => {
        if(user.user===null) {
            return navigate.push('login');
        }
        if(open) {
           return setOpen(false);
        }
        return setOpen(true);
        
    }

    return(
        <Box sx={{ width:300}}>
            <List aria-label="main mailbox folders">
                {user?.user ? ( 
                    <Avatar onClick={openMenu} sx={{marginLeft:'20px' ,cursor:'pointer', marginTop:'15px', marginBottom: '15px'}} alt="" src={user.user.profileimg_url} />
                ) : (
                    <Button>L</Button>
                )}
                
                <ListItemLink to="/home" primary="홈" icon={<HomeIcon />}/>
                {user.user!==null && (<ListItemLink to="/explore" primary="탐색" icon={<SearchIcon />}/>)}
                {user.user!==null && (<ListItemLink to="/alarm" primary="알림" icon={<NotificationsIcon />}/>)}
                {user.user!==null && (<ListItemLink to="/chat" primary="메시지" icon={<SendIcon />}/>)}
                {/* <ListItemLink to="/dashboard/two" primary="test" icon={<DraftsIcon />}/> */}
            </List>


        </Box>
    )
}
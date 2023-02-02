import { Box, Typography } from "@mui/material";
import React from "react";
import LockIcon from '@mui/icons-material/Lock';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Comma from "src/utils/comma";
// eslint-disable-next-line arrow-body-style
const ChatAlbumnLock = ({data}) => {
    const msgChange = (msg) => {
        if (msg.length > 9) {
            return `${msg.substr(0, 8)}...`;
        }
        return msg;
    };
    return(
        <Box sx={{backgroundColor: '#9DA0B2', width: '100%', height: '100%',}}>
            <Box>
                <LockIcon sx={{width: '15px', marginLeft: '5px', color:'white'}}/>
            </Box>
            <Box sx={{textAlign: 'center', marginTop: '25px'}}>
                <Box sx={{display: 'inline-block', background:'#2D2C39', borderRadius: '15px' }}>
                    <FavoriteIcon sx={{color: 'white',background: 'red',borderRadius: '15px' , width: '15px', height: '15px', marginLeft: '5px'}}/>
                    <Typography sx={{color: 'white', marginLeft : '3px' , marginRight: '5px'}}variant="caption">
                        {Comma(data.media.price/100)}
                    </Typography>
                </Box>
                
            </Box>
            <Box sx={{marginTop: '35px'}}>
                <Box sx={{ background:'#2D2C39', borderRadius: '10px', marginLeft: '5px', marginRight: '5px'}}>
                    <Typography variant="caption" sx={{marginLeft:'5px', color: 'white'}}>
                        {msgChange(data?.message)}
                    </Typography>
                    
                </Box>

            </Box>
            
        </Box>
    )
}

export default ChatAlbumnLock
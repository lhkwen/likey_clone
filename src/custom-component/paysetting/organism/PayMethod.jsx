import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PayCard from "./PayCard";
// eslint-disable-next-line arrow-body-style
const PayMethod = () => {
    const clickEvent= () => {
        console.log(' 클릭')
    }
    return(
        <>
            <Box sx={{marginTop:'15px', display:'flex', justifyContent: 'space-between'}}>
                <Typography variant="h6" sx={{marginLeft: '15px'}}> 보유하트</Typography>
                <Box sx={{justifyContent:"flex-end",marginRight:'15px'}}>
                    <FavoriteBorderIcon sx={{paddingTop: '7px'}}/><span >0</span>
                </Box>
            </Box>
            
            <Box sx={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', marginLeft: '15px', marginRight:'15px',marginTop:'10px', marginBottom:'10px'}}/>
            <Box sx={{display: 'flex', justifyContent: "space-between" , cursor:'pointer'}} onClick={clickEvent}>
                <Typography  sx={{marginLeft: '15px'}} variant="subtitle2" >하트 충전</Typography>
                <Typography sx={{marginRight: '15px'}} variant="subtitle2" >&gt;</Typography>
            </Box>
            <PayCard/>
        </>
    )
}

export default PayMethod
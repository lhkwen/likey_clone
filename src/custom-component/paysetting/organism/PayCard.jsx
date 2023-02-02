import { Box, Typography } from "@mui/material";
import React from "react";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useRouter } from "next/router";
// eslint-disable-next-line arrow-body-style
const PayCard = () => {
    const navigate = useRouter();
    const clickEvent = () => {
        navigate.push('/card');
    }
    return(
        <>
            <Box sx={{marginTop:'15px', display:'flex', justifyContent: 'space-between'}}>
                <Typography variant="h6" sx={{marginLeft: '15px'}}> 내카드</Typography>
            </Box>
            <Box sx={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', marginLeft: '15px', marginRight:'15px',marginTop:'10px', marginBottom:'10px'}}/>
            <Box onClick={clickEvent} sx={{marginLeft:'15px',marginRight:'15px', height: '75px', position: 'relative', border: 'dotted', borderColor: '#53B8F7'}}>
                <Typography variant="h6" sx={{cursor:'pointer', position: 'absolute' ,top: '50%',transform: 'translate(-50%, -50%)', left: '50%',color:'#53B8F7'}}>
                    <ControlPointIcon sx={{paddingTop: '8px'}}/> 신용/체크카드 추가
                </Typography>
            </Box>
        </>
    )
}

export default PayCard
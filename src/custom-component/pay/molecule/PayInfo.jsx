import { Box, Divider, Typography } from "@mui/material";
import React, { useMemo } from "react";

import { useSelector } from "react-redux";
import { selectSubInfo } from "src/redux/subSlice";
import Comma from "src/utils/comma";
import { position } from "stylis";
import PayDesc from "./PayDesc";

const PayInfo = () => {
    const subInfo = useSelector(selectSubInfo);
    const boxStyle= useMemo(()=> ({
        display: 'flex',
        justifyContent: 'space-between',
    }),[])
    return(
        <Box sx={{paddingLeft:'15px', paddingTop: '35px' , paddingRight:'15px'}}>
            
            <Typography variant="h6" sx={{marginBottom:'10px'}}>결제상세</Typography>
            <div style={boxStyle}>
            <Typography variant="subtitle1" sx={{marginBottom:'10px'}}>총주문가격</Typography> 
            <Typography variant="subtitle1" sx={{marginBottom:'10px'}}>KRW {Comma(subInfo.subInfo.set_price)}</Typography>
            </div>
            <div style={boxStyle}>
            <Typography variant="subtitle2" sx={{marginBottom:'10px'}}>플랜가격(월 정기결제)</Typography>
            <Typography variant="subtitle2" sx={{marginBottom:'10px'}}>KRW {Comma(subInfo.subInfo.set_price)}</Typography>
            </div>
            <div style={boxStyle}>
            <Typography variant="subtitle1" sx={{marginBottom:'10px'}}>부가세</Typography>
            <Typography variant="subtitle1" sx={{marginBottom:'10px'}}>KRW {Comma(subInfo.subInfo.set_price * 0.1)}</Typography>
            </div>
            
            <Divider/>
            <div style={boxStyle}>
            <Typography variant="h5" sx={{marginTop:'10px'}}>최종 결제금액</Typography>
            <Typography variant="subtitle1" sx={{color:'red',marginTop:'10px'}}>KRW {Comma((subInfo.subInfo.set_price)+(subInfo.subInfo.set_price * 0.1))}</Typography>
            </div>
            
            <PayDesc />

        </Box>
        
    )
}

export default PayInfo;
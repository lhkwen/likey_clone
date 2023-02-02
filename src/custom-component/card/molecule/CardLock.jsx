import { Box, Button, Typography } from "@mui/material";
import { width } from "@mui/system";
import { useRouter } from "next/router";
import React, { useMemo } from "react"
import Comma from "src/utils/comma";
import PublicIcon from '@mui/icons-material/Public';

const CardLock = ({postData}) => {
    const navigate = useRouter();
    console.log(navigate.route)
    const moveBuy = () => {
        navigate.push('/pay')
    }
    const boxstyle = useMemo(()=>({
        maxWidth: '100%',
        height: '300px',
        background: '#F3F3F9'
     }),[]);
    const centerStyle = useMemo(()=>({
        position: 'absolute',
        top: '50%',
        width: '100%',
        height: '30px',
        // overflow: 'hidden',
        // background: 'rgba(255, 255, 255, 0.3)',
        // borderRadius: '50%',
        textAlign: 'center',
        zIndex: 999,
    }),[]);
    return(
        <div style={boxstyle}>
            {navigate.route !== '/explore' &&(<Box sx={{background:'white' , position: 'absolute', top: '80px', left: '15px', display: 'flex'}}>
                <PublicIcon sx={{width:'15px'}}/>
                <Typography variant="body2" >멤버십 전용</Typography> 
            </Box>)}

            <div style={centerStyle} onClick={moveBuy}>
                멤버십 전용포스트<br />
                <Button>&#8361;{postData.permission_code==='NEEDCONTBUY' ? Comma(postData.contpkg_price) : Comma(postData.set_price)}/월 구독하기</Button></div>
        </div>
    )
}

export default CardLock
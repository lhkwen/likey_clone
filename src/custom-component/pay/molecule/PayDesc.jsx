import { Card, Typography } from "@mui/material";
import React, { useMemo } from "react";

const PayDesc= () => {
    const openStyle = useMemo(()=>({
        height: '100%',
        textAlign: 'left',
        paddingLeft: '20px',
    }),[])
    return(

    
        <Card sx={{  maxWidth: '100%' , marginTop: '20px', paddingTop: '25px' ,paddingBottom: '25px' , background:'#F9F9F9'}}>
            <Typography style={openStyle} variant="body2">
                멤버십 취소/환불 규정
            </Typography>
            <Typography sx={{fontSize: '2px'}} style={openStyle} variant="caption">
                ・이 플랜은 2023-02-26 에 자동 갱신됩니다.
            </Typography>
            <br />
            <Typography sx={{fontSize: '2px'}} style={openStyle} variant="caption">
                ・언제든지 플랜을 변경 또는 취소할 수 있습니다.
            </Typography>
            <br />
            <Typography sx={{fontSize: '2px'}} style={openStyle} variant="caption">
                ・가입일로부터 7일 이내에 플랜 업그레이드 시 차액결제 후 바로 업그레이드된 플랜으로 구독합니다.
            </Typography>
            <br />
            <Typography sx={{fontSize: '2px'}} style={openStyle} variant="caption">
                ・등록한 카드로 결제되며 결제 이후 환불이 절대 불가합니다.
            </Typography>
            <br />
            <Typography sx={{fontSize: '2px'}} style={openStyle} variant="caption">
                ・카드 등록 후 월 정기 구독료는 등록하신 카드로 자동 결제됩니다.
            </Typography>
        </Card>
        )
}

export default PayDesc;
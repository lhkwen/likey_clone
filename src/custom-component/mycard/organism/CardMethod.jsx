import { Box, TextField, Typography } from "@mui/material";
import React, { useMemo, useState , useEffect } from "react";
import InfoIcon from '@mui/icons-material/Info';


const CardMethod = () => {
    const boxStyle = useMemo(()=> ({
        width: '100%',
        marginBottom: '15px'
    }),[])

    const textStyle= useMemo(()=> ({
        fontSize: '10px'
    }),[])

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [text4, setText4] = useState('');

    const textEvent1 = (e) => {
        setText1(e.target.value);
    }
    const textEvent2 = (e) => {
        setText2(e.target.value);
    }

    const textEvent3 = (e) => {
        setText3(e.target.value);
    }

    const textEvent4 = (e) => {
        setText4(e.target.value);
    }



    return(
        <Box sx={{paddingLeft:'15px', paddingTop: '35px' , paddingRight:'15px'}}>

            <div>
                <Typography variant="body" >카드번호</Typography>
            </div>
            <div>
                <TextField value={text1} onChange={textEvent1} style={boxStyle} placeholder="0000  0000  0000  0000" />
            </div>
            <div>
                <Typography variant="body">유효 기간</Typography>
            </div>
            <div>
                <TextField value={text2} onChange={textEvent2} style={boxStyle} placeholder="MM/YY" />
            </div>
            <div>
                <Typography variant="body">생년월일</Typography>
            </div>
            <div>
                <TextField value={text3} onChange={textEvent3} style={boxStyle} placeholder="YYMMDD" />
            </div>
            <div style={textStyle}>
                법인카드는 사업자번호 10자리를 입력하세요.
            </div>
            <br />
            <div>
                <Typography variant="body">비밀번호 앞2자리</Typography>
            </div>
            <div>
                <TextField value={text4} onChange={textEvent4} style={boxStyle} placeholder="카드 비밀번호 앞2자리" />
            </div>
            <div style={textStyle}>
                최초 카드 등록시 인증을 위해 = 500원이 결제됩니다.
            </div>
        </Box>
    )
}

export default CardMethod;
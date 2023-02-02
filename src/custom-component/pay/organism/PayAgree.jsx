import { Box, Checkbox, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useMemo, useState , useEffect } from "react";




const PayAgree = ({setValidAgree}) => {
    const navigation = useRouter();
    const [allcheck, setAllCheck] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const allCheckEvent = (e) => {
        setAllCheck(e.target.checked);
        setCheck1(e.target.checked);
        setCheck2(e.target.checked);
        setCheck3(e.target.checked);
        setCheck4(e.target.checked);
        console.log(e.target.checked);
        setValidAgree(e.target.checked);
    }
    const checkEvent1 = (e) => {
        setCheck1(e.target.checked);
    }
    const checkEvent2 = (e) => {
        setCheck2(e.target.checked);
    }
    const checkEvent3 = (e) => {
        setCheck3(e.target.checked);
    }
    const checkEvent4 = (e) => {
        setCheck4(e.target.checked);
    }

    const boxStyle= useMemo(()=> ({
        display: 'flex',
        // justifyContent: 'space-between',
    }),[])

    const pageEvent1 = () => {
        navigation.push('https://static.likeycontents.xyz/res/eft/ko.html?v=1629885769019');
    }
    const pageEvent2 = () => {
        navigation.push('https://static.likeycontents.xyz/res/ap_tos/ko.html?v=1629885769019');
    }
    const pageEvent3 = () => {
        navigation.push('https://static.likeycontents.xyz/res/ap_pp/ko.html?v=1629885769019');
    }

    return(
        <Box sx={{paddingLeft:'15px', paddingTop: '35px' , paddingRight:'15px'}} >
            <div style={boxStyle}>
                <Checkbox
                    checked={allcheck}
                    onChange={allCheckEvent}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography variant="h6" sx={{paddingTop: '7px'}}>결제 진행 필수 동의</Typography>
            </div>
            <Divider/>
            <div style={boxStyle}>
                <Checkbox
                    checked={check1}
                    onChange={checkEvent1}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px'}}>구매할 상품의 결제 조건을 확인하였으며, 구매에 동의합니다.(필수)</Typography>
            </div>
            <div style={boxStyle}>
                <Checkbox
                    checked={check2}
                    onChange={checkEvent2}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px'}}>전자금융거래 이용약관 동의 (필수)</Typography>
                <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px', marginLeft: 'auto'}} onClick={pageEvent1}>약관보기</Typography>
                
            </div>
            <div style={boxStyle}>
                    <Checkbox
                        checked={check3}
                        onChange={checkEvent3}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px'}}>자동결제 서비스 이용약관 동의 (필수)</Typography>
                    <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px', marginLeft: 'auto'}}  onClick={pageEvent2}>약관보기</Typography>
                
            </div>
            <div style={boxStyle}>
                <Checkbox
                    checked={check4}
                    onChange={checkEvent4}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px'}}>개인정보 제공 및 위탁 안내 동의 (필수)</Typography>
                <Typography variant="body1" sx={{paddingTop: '10px' ,fontSize: '13px', marginLeft: 'auto'}}  onClick={pageEvent3}>약관보기</Typography>
                
            </div>
        </Box>
    )
}

export default PayAgree
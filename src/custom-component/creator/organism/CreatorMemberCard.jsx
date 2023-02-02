import { Button, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setSubInfo } from "src/redux/subSlice";

import Comma from "src/utils/comma";

const CreatorMemberCard = ({mData}) => {
    const dispatch = useDispatch();
    const Navigation = useRouter();
    const cardStyle= useMemo(()=> ({
        padding: '15px',
        backgroundColor:'#F9F9F9',
        paddingTop: '25px',
        paddingBottom: '25px',
        marginTop: '30px',
        marginBottom:'30px',
    }),[])
    const btnStyle = useMemo(()=> ({
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 50%)'
    }),[])

    const textStyle = useMemo(()=> ({
        color: 'red',
    }),[])
    
    const subEvent = () => {
        dispatch(
            setSubInfo({subInfo: mData})
        );
        setTimeout(() => {
        Navigation.push('/pay');
      }, 1000);
        
        
    }

    return(
        <Card sx={{ maxWidth: '100%'}} style={cardStyle}>
            <div>{mData.subscription_name}</div>
            <Typography variant="h6" style={textStyle}>&#8361;{Comma(mData.set_price)}/월</Typography>
            <br/>
            <Typography variant="subtitle1" >{mData.subscriptiondesc}</Typography>
            <br/>
            <Typography variant="body2">
                ・크리에이터와 1:1 유료 채팅
            </Typography>
            <Typography variant="body2">
                ・플랜 전용 포스트 보기
            </Typography>
            <Typography variant="body2">
                ・모든 기간의 포스트 열람 가능
            </Typography>
            
            <Button  style={btnStyle} color="error" variant="outlined" onClick={subEvent}> 구독하기 </Button>
        </Card>
    )
}

export default CreatorMemberCard;
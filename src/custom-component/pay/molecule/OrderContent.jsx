import { Avatar, Box, Card, CardHeader, Icon, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { red } from '@mui/material/colors';
import { useSelector } from "react-redux";
import { selectSubInfo } from "src/redux/subSlice";
import Comma from "src/utils/comma";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

function OrderContent() {
    const subInfo = useSelector(selectSubInfo);

    const [price , setPrice] = useState(`₩${Comma(subInfo.subInfo.set_price)}/월`);
    const [clickFlg, setClickFlg] = useState(true);
    const btnStyle = useMemo(()=> ({
        textAlign: 'center'
    }),[])
    const openStyle = useMemo(()=>({
        height: '100%',
        textAlign: 'left',
        paddingLeft: '20px',
    }),[])

    const rightStyle = useMemo(()=>({
        textAlign: 'right',
        paddingRight: '15px'
    }),[])

    const boxStyle = useMemo(()=> ({
        backgroundColor: '#F3F3F9',
        marginBottom: '5px',
        borderRadius: '10px'
    }),[])

    const boxLayStyle = useMemo(()=> ({
        padding: '20px'
    }),[])


    const clickEvent= () => {
        if(clickFlg) {
        return setClickFlg(false);
        }
        return setClickFlg(true);
    }
    return(
        <Box sx={{ paddingLeft:'15px', paddingTop: '35px'}}>
            <Typography variant="h5">주문 정보</Typography>
            <br />
            <Typography variant="body">선택한 멤버십</Typography><br />
            <Card sx={{ maxWidth: '100%'}}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                    title={subInfo.subInfo.subscription_name}
                    // eslint-disable-next-line no-sequences
                    subheader={price}
                    titleTypographyProps={{variant:'subtitle1' }}
                    subheaderTypographyProps={{variant:'subtitle2'}}
                />
                <List sx={{pt:0 ,maxWidth:'100%'}} style={boxLayStyle}>
                <ListItem style={boxStyle}>
                       <WallpaperIcon sx={{width: 20}}/>
                       <Typography sx={{fontSize: 7}} >사진/동영상</Typography> 
                </ListItem>
                <ListItem style={boxStyle}>
                        <DeleteIcon sx={{width: 20}} />
                        <Typography sx={{fontSize: 7}} >상품</Typography>
                </ListItem>
                <ListItem style={boxStyle}>
                        <SendIcon sx={{width: 20}}/>
                        <Typography sx={{fontSize: 7}} >1:1채팅</Typography>
                </ListItem>
            </List>
            <div style={btnStyle} onClick={clickEvent}>
                {clickFlg ? (
                <Box sx={{cursor:'pointer'}}>
                    혜택보기▼
                </Box>
                ):(
                    <>
                        <Typography style={openStyle} variant="body2">{subInfo.subInfo.subscriptiondesc}</Typography>
                        <Typography style={openStyle} variant="body2">・크리에이터와 1:1 유료 채팅</Typography>
                        <Typography style={openStyle} variant="body2">・플랜 전용 포스트 보기</Typography>
                        <Typography style={openStyle} variant="body2">・모든 기간의 포스트 열람 가능</Typography>
                        <Box sx={{cursor:'pointer'}}>접기▲</Box>
                        
                    </>
                )}
            </div>
            <div style={rightStyle}>
                플랜변경하기
            </div>
        </Card>
        </Box>
    )
}

export default OrderContent;
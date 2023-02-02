import { Divider, List, ListItem, ListItemButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Header from "src/custom-component/buy/organism/Header";
import HomeLayout from "src/layouts/content/HomeLayout";

const Buy = () => {
    const navigate = useRouter();
    const moveEvent= (type) => {
        if(type==='store') {
            navigate.push('/buy/store');
        }else {
            navigate.push('/buy/post');
        }
    }
    return(
        <HomeLayout>
            <Header type={1}/>
            <List sx={{width:'100%'}} >
                <ListItem >
                    <ListItemButton  key="1" onClick={()=>moveEvent('store')} sx={{display: 'flex', justifyContent: "space-between"}}>
                        <Typography  variant="subtitle2" >상품</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem >
                    <ListItemButton  key="2" onClick={()=>moveEvent('post')} sx={{display: 'flex', justifyContent: "space-between"}}>
                        <Typography  variant="subtitle2" >포스트</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
            </List>
        </HomeLayout>
    )
}

export default Buy;
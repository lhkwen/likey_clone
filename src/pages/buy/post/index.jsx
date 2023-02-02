import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import Header from "src/custom-component/buy/organism/Header";
import HomeLayout from "src/layouts/content/HomeLayout";

const Post = () => {
    console.log('');
    return(
        <HomeLayout>
            <Header type={3}/>
            <List sx={{width:'100%'}} >
                <ListItem sx={{ textAlign: 'center' , display:'flex', justifyContent:'center'}} >
                        <Typography sx={{marginTop: '50px'}}variant="subtitle2" >구매한 포스트가 없습니다.</Typography>
                </ListItem>
            </List>
        </HomeLayout>
    )
}

export default Post;
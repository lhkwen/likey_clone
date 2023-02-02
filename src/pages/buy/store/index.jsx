import { List } from "@mui/material";
import React from "react";
import Header from "src/custom-component/buy/organism/Header";
import HomeLayout from "src/layouts/content/HomeLayout";

const Store = () => {
    console.log('');
    return(
        <HomeLayout>
            <Header type={2}/>
            <List sx={{width:'100%'}} >
                {/* <ListItem >
                    <ListItemButton  key="1" onClick={()=>moveEvent('store')}>
                        <Typography  variant="subtitle2" >상품</Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem >
                    <ListItemButton  key="2" onClick={()=>moveEvent('post')}>
                        <Typography  variant="subtitle2" >포스트</Typography>
                    </ListItemButton>
                </ListItem> */}
            </List>
        </HomeLayout>
    )
}

export default Store;
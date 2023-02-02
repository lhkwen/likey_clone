import { Dialog, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useMemo } from "react";

import { useSelector } from "react-redux";
import { selectPost } from "src/redux/postSlice";
import CopyURL from "src/utils/CopyURL";

export default function HomeDialog({
    moreFlg, setMoreFlg
}) {
    const post =  useSelector(selectPost);
    const closeEvent = (e) => {
        setMoreFlg(false);
    }
    
    const linkEvent = (e) => {
        navigator.clipboard
        .writeText(CopyURL('my', post.post.post_idx))
        console.log(post)
        // .writeText(CopyURL(null, router.locale, post.postId))
        setMoreFlg(false);
    }

    return(
        <Dialog open={moreFlg}  maxWidth="md" >
            <List sx={{width:'250px'}} >
                <ListItem sx={{height:'30px'}}>
                    <ListItemButton sx={{ textAlign: 'center' , display:'flex', justifyContent:'center'}} onClick={linkEvent} key="1">
                        <Typography sx={{fontSize: '10px'}} variant="subtitle2" >링크복사</Typography>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem sx={{height:'30px'}}>
                    <ListItemButton sx={{textAlign: 'center' , display:'flex', justifyContent:'center'}} onClick={closeEvent} key="2">
                        <Typography sx={{fontSize: '10px'}} variant="subtitle2" >닫기</Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    )
}

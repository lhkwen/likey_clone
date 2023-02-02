import { Box, Button, Dialog, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React, { useMemo } from "react";

export default function AppDialog({
    moreFlg, setMoreFlg
}) {
    const closeEvent = (e) => {
        setMoreFlg(false);
    }
    const imgSize = {

        display: 'initial',
    }
    

    return(
        <Dialog open={moreFlg}  maxWidth="md" >
            <Box sx={{width:'250px'}}>
                <Box sx={{float: 'right', marginRight: '20px',  marginTop: '5px',cursor:'pointer' }}onClick={closeEvent}>
                X
                </Box>
                <Box sx={{ marginTop: '30px', textAlign: 'center'}}>
                    <img src='/assets/icons/L.png' alt="" style={imgSize}/>
                    <Typography variant="h6" sx={{padding: '5px'}}>영상채팅은 앱에서만 가능합니다. </Typography>
                    <Button color = 'error' variant="outlined" sx={{marginTop: '15px', marginBottom: '15px', width: '200px'}}>앱다운로드하기</Button>
                </Box>
            </Box>
            
        </Dialog>
    )
}

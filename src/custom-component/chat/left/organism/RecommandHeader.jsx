import { Box, Divider, Typography } from "@mui/material";
import React from "react";

// eslint-disable-next-line arrow-body-style
const RecommandHeader = () => {
    return(
        <>
        <Box sx={{padding: '5px'}}>
            <Typography variant="h6">회원님을 위한 추천</Typography>
            
        </Box>
        <Divider/><Divider/><Divider/><Divider/><Divider/><Divider/>
        </>
    )
}

export default RecommandHeader;
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

// eslint-disable-next-line arrow-body-style
const Header = () => {

    return(
    <>
        <Box sx={{padding: '5px'}}>
            <Typography variant="h6">메시지</Typography>
        </Box>
        <Divider/><Divider/>
    </>    
    )
}
export default Header;
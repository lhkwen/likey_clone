import { Box, Typography } from "@mui/material";
import React from "react";

// eslint-disable-next-line arrow-body-style
const PayDetail = () => {
    return(
        <>
            <Typography variant="h5" sx={{marginLeft: '15px', marginRight:'15px', marginTop:'15px'}}> 결제내역</Typography>
            <Box sx={{borderWidth: '1px 1px 1px 1px', borderStyle: 'solid', marginLeft: '15px', marginRight:'15px'}}/>
        </>
    )

}

export default PayDetail
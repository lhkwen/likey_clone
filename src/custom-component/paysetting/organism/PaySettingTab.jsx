import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import HorizonalBar from "../../home/organism/HorizonalBar";
import PayDetail from "./PayDetail";
import PayMethod from "./PayMethod";

const PaySettingTab = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const btnStyle = {
        width: '45%'
    }

    return(
       <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="1" label="결제수단" style={btnStyle}/>
                <Tab value="2" label="결제내역" style={btnStyle}/>
                
            </Tabs>
            <HorizonalBar />
            {value === '1' && (
                <PayMethod />
            )}
            {value ==='2' && (
                <PayDetail/>
            )}
        </Box>
    )
}

export default PaySettingTab;
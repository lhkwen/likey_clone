import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useMemo } from "react";

const MembershipTab = () => {
    const [value, setValue] = React.useState('1');
    const btnStyle = {
        width: '45%'
    };
    const changeEvent = (event, newValue) => {
        setValue(newValue);
    };

    const middleStyle = useMemo(()=> ({
        marginTop: '100px',
        textAlign: 'center'
    }),[])
    return(
        <Box sx={{ width: '100%'}}>
            <Tabs
                value={value}
                onChange={changeEvent}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value='1' label="0 구독중" style={btnStyle}/>
                <Tab value='2' label="0 구독만료" style={btnStyle} /> 
            </Tabs>
            {value === '1' && (
                <div style={middleStyle}>
                    <Typography variant="body2">구독한 플랜이 없습니다.</Typography>
                </div>
                
            )}
            {value ==='2' && (
                <div style={middleStyle}>
                    <Typography variant="body2">만료된 멤버십이 없습니다.</Typography>
                </div>
            )}
        </Box>
    )
}

export default MembershipTab;
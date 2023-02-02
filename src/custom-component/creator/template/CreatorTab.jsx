import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import HorizonalBar from "../../home/organism/HorizonalBar";
import CardContent from "./CardContent";
import CreatorMembership from "./CreatorMembership";

const CreatorTab = ({data}) => {
    const [value, setValue] = React.useState('1');
    const btnStyle = {
        width: '45%'
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="포스트" style={btnStyle}/>
        <Tab value="2" label="멤버쉽" style={btnStyle}/>
        
      </Tabs>
      <HorizonalBar />
      {value === '1' && (
        <CardContent data={data}/>
      )}
      {value ==='2' && (
        <CreatorMembership data={data} />
      )}
    </Box>
    )
}

export default CreatorTab;
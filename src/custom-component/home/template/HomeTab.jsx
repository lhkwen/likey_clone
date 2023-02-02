import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SubContent from "../../subscribe/template/SubContent";
import CardContent from "../../card/template/CardContent";
import HorizonalBar from "../organism/HorizonalBar";



const HomeTab = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const btnStyle = {
    width: '45%'
  }

  useEffect(()=>{
    
  },[])

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="1" label="팔로잉" style={btnStyle}/>
        <Tab value="2" label="구독" style={btnStyle}/>
        
      </Tabs>
      <HorizonalBar />
      {value === '1' && (
        <CardContent/>
      )}
      {value ==='2' && (
        <SubContent/>
      )}
    </Box>
  );
}

export default HomeTab;
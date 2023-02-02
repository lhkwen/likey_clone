import { Card } from "@mui/material";
import React, { useState } from "react";
import SubCard from "../../subscribe/organism/SubCard";

const RecommandItem = ({subData}) => (
        <Card sx={{ maxWidth: '100%'}}>
               
                {subData.data.map((subUserData,idx)=> (
                <React.Fragment key={subUserData.userseq}>
                    <SubCard subData={subUserData}/>
                </React.Fragment>
                
            ))}
        </Card>
    )

export default RecommandItem;
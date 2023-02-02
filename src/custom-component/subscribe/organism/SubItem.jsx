import { Avatar, Button, Card, CardHeader, Hidden, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SubCard from "./SubCard";


const SubItem = ({subData}) => {
    const [btnVaule, setBtnVaule] = useState(true);
    const followEvent = (e) => {
        setBtnVaule(false);
    }
    const styleObj = {
        width: '80%',
        marginLeft : '80px',
     //   height: '100%',
        textAlign: 'left',
        fontSize: '14px',
    }
    return(
        <Card sx={{ maxWidth: '100%'}}>
               
                {subData.data.map((subUserData,idx)=> (
                <React.Fragment key={subUserData.userseq}>
                    <SubCard subData={subUserData}/>
                </React.Fragment>
                
            ))}
        </Card>
    )
}

export default SubItem;
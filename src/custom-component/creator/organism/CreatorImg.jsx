import { IconButton } from "@mui/material";
import React, { useMemo } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CreatorImg = ({data}) => {
    const bgStyle= useMemo(()=> ({
        width: '100%',
        height: '300px',
        position: 'relative',
    }),[])
    

    const imgStyle = useMemo(()=> ({
     //   position: 'absolute, top:0, left:0',
        width: '100%',
        height: '100%',
    }),[])

    const moreBtnStyle = useMemo(()=> ({
        position: 'absolute',
        top: '15px',
        right: '15px',
    }),[])
    return(
        <div style={bgStyle}>
            <img style={imgStyle} alt="" src={data?.profilebgimg_url}/>
            <div style={moreBtnStyle}>
                <IconButton >
                    <MoreVertIcon />
                </IconButton>
            </div>
            
        </div>
    )
}

export default CreatorImg;
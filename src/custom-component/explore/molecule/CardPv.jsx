import React, { useMemo, useState } from "react";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { Typography } from "@mui/material";
import CardVideo from "../../card/molecule/CardVideo";

const CardPv = ({postData}) => {
    const [index, setIndex] = useState(0);

    const nextStyle = useMemo(()=>({
            position: 'absolute',
            top: '50%',
            width: '30px',
            height: '30px',
            // textIndent: '-999px',
            overflow: 'hidden',
            // transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            transition: '.1s',
            right: '16px',
            zIndex: 999,
    }),[]);
    const prevStyle = useMemo(()=>({
            position: 'absolute',
            top: '90%',
            width: '100%',
            height: '30px',
            // textIndent: '-999px',
            overflow: 'hidden',
            // transform: 'translateY(-50%)',
            transition: '.1s',
            left: '16px',
            zIndex: 999,
    }),[]);


    const videoSrc = {
        type: "video",
        sources: [
            {
            src: postData.contentpkg[index].content_url[720],
            type:'video/mp4'
            }
        ]
    };

    const imgStyle = useMemo(()=> ({
        height: '100%',
    
    }),[])

    const pointerStyle = useMemo(()=> ({
        cursor: 'pointer',
    }),[])


    return(
        <div style={pointerStyle}>
            {postData.contentpkg[index].contenttype === '1' ? (
                <img src={postData.contentpkg[index].content_url} alt='' style={imgStyle}/>
            ):(
                <CardVideo 
                    mediaData={postData.contentpkg[index]}
                    style={imgStyle}
                />
                // <Plyr source={videoSrc} />
            )
            }
            <div className="contral" >
                <Typography variant="subtitle1" style={prevStyle}>{postData.nick}</Typography>
                    </div>
            {Number(postData.vod_count) + Number(postData.photo_count) > 1 && (
                <div className="contral"  />
            )}
            
        </div>
    )
}

export default CardPv;
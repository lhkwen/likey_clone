import React, { useMemo, useState } from "react";
import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import CardVideo from "./CardVideo";

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
            top: '50%',
            width: '30px',
            height: '30px',
            // textIndent: '-999px',
            overflow: 'hidden',
            // transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
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


    return(
        <>
            {postData.contentpkg[index].contenttype === '1' ? (
                <img src={postData.contentpkg[index].content_url} alt=''/>
            ):(
                <CardVideo 
                    mediaData={postData.contentpkg[index]}
                />
                // <Plyr source={videoSrc} />
            )
            }
            {Number(postData.vod_count) + Number(postData.photo_count) > 1 && (
                <div className="contral">
                    {
                        index !== 0 && (
                            <button type="button" style={prevStyle} onClick={() => setIndex((prev) => prev - 1)}>&lt;</button>
                        )
                    }
                    {
                        index !== Number(postData.contentpkg.length - 1) && (
                            <button type="button" style={nextStyle} onClick={() => setIndex((prev) => prev + 1)}>&gt;</button>
                        )
                    }
                </div>
            )}
            
        </>
    )
}

export default CardPv;
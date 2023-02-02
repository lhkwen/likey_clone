
import { Card } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import CardLock from "../../card/organism/CardLock";
import CardPv from "../organism/CardPv";

const CardItem = ({postData}) => {
    const navigate = useRouter();


    const clickEvent = (e) => {
        navigate.push(`/explore/${postData.profile_id}`);
    }

    return(
        <Card sx={{ width: '50%'}} onClick={clickEvent}>
                {(postData.permission_code==='NEEDCONTBUY' || postData.permission_code==='NEEDBUY' || postData.permission_code==='SALESEXPIRED') ? (
                        <CardLock postData={postData}/>
                    ) : (
                        <>
                            {postData.contentpkg.length>0 &&(<CardPv 
                                postData={postData}
                            />)}
                        </>
                    )
                }
        </Card>
    )
}

export default CardItem;
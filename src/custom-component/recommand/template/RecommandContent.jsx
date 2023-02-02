import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetRecommandQuery } from "src/api/services/recommend";
import { selectUser } from "src/redux/userSlice";
import RecommandHorizonBar from "../organism/RecommandHorizonBar";
import RecommandItem from "../organism/RecommandItem";


const RecommandContent = () => {
    const user = useSelector(selectUser);
    const {data, isSuccess} = useGetRecommandQuery({
        idx:user.user.user_idx
    });

    return(
        <>
        <br />
            <RecommandHorizonBar />
        <br />
            <Typography sx={{marginLeft: '15px'}} variant="h6">팔로우추천</Typography>
           {isSuccess && (
             <RecommandItem subData={data} />
           )} 

            
           

        </>
    )
}

export default RecommandContent;
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetPostQuery } from "src/api/services/post";
import { useGetRecommandQuery } from "src/api/services/recommend";
import { selectPost } from "src/redux/postSlice";
import { selectUser } from "src/redux/userSlice";
import SubBar from "../organism/SubBar";
import SubHorizonBar from "../organism/SubHorizonBar";


const SubContent = () => {
    const user = useSelector(selectUser);
    const {data, isSuccess} = useGetRecommandQuery({
        idx:user.user.user_idx
    });

    return(
        <>
        <br />
            <SubHorizonBar />
        <br />
            <Typography sx={{marginLeft: '15px'}} variant="h6">팔로우추천</Typography>
            {isSuccess && (
             <SubBar subData={data} />
            )} 

            
           

        </>
    )
}

export default SubContent;
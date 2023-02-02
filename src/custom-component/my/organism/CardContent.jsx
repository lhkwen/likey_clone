import { Box } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { useGetCommentListQuery } from "src/api/services/commentList";
import { useGetPostQuery } from "src/api/services/post";
import { selectPost } from "src/redux/postSlice";
import { selectUser } from "src/redux/userSlice";
import CardBottom from "../../card/molecule/CardBottom";
import CardReply from "../../card/molecule/CardReply";
import HorizonalBar from "../../home/molecule/HorizonalBar"
import CardItem from "../molecule/CardItem";

const CardContent = () => {
    const post = useSelector(selectPost);
    const [commentData, setCommentData] = useState([]);
    // const [postquery] = useGetPostQuery({
    //     postNum : post.post.post_idx
    // });
    const {data: postData , isSuccess: postSuccess} = useGetPostQuery({
        postNum : post.post.post_idx
    });

    const {data: commentListData, isSuccess: commentSuccess} = useGetCommentListQuery({
        idx: post.post.post_idx,
        limit: 5,
        offset: 0,
    });


    useEffect(()=> {
        if(commentSuccess) {
            setCommentData(commentListData.data);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[commentSuccess]);

    return (
        <Box sx={{height: '100%',overflowY: 'auto'}}>
        {postSuccess &&(
            <CardItem postData={postData.data}/>
        )
            
        }
        {commentSuccess && (
            commentData.map((data,idx)=>(
                <React.Fragment key={data.comment_idx}>
                    <CardReply
                        commentData={data}
                    />
                </React.Fragment>
            ))
        )}
        
        {/* <CardBottom 
            commentData={commentData}
            setCommentData={setCommentData}
        /> */}
        </Box>
        
    )
}

export default CardContent;
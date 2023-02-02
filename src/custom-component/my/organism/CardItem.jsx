
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Hidden, IconButton, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import React, { useMemo, useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setPost } from "src/redux/postSlice";
import HomeDialog from "../../dialog/organism/HomeDialog";
import CardPv from "../../card/organism/CardPv";

const CardItem = ({postData}) => {
    const dispatch = useDispatch();
    const [moreFlg, setMoreFlg] = useState(false);
    const [favoriteFlg, setFavoriteFlg] = useState(false);
    const [favoriteCount, setFavoriteCount] = useState(postData.like_count);
    const [commentCount, setCommentCount] = useState(postData.comment_count);
    const navigate = useRouter();
    const moreEvent = (e) => {
        setMoreFlg(true);
    }

    const favoriteEvent = (e) => {
        if(favoriteFlg) {
            setFavoriteFlg(false);
            setFavoriteCount(favoriteCount-1);
        }else {
            setFavoriteFlg(true);
            setFavoriteCount(favoriteCount+1);
        }
    }
    const replyEvent = (e) => {
        navigate.push("/pay");
    }

    const contentEvent = (e) => {
        dispatch(
            setPost({
                post: postData,
            })
        );
        navigate.push(`/my/${postData.post_idx}`);
    }
    const pointerStyle = useMemo(()=> ({
        cursor: 'pointer',
    }),[])

    return(
        <>
            <Card sx={{ maxWidth: '100%'}}>
                <CardHeader
                    avatar={
                    <Avatar alt="" src={postData.profileimg_url} style={pointerStyle}>
                        R
                    </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings" onClick={moreEvent}>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={postData.nick}
                    subheader={postData.profile_id}
                    titleTypographyProps={{variant:'subtitle1' }}
                    subheaderTypographyProps={{variant:'subtitle2'}}
                />

                <CardContent sx={{width:'500px'}} onClick={contentEvent}>
                    <Typography variant="body2" color="text.secondary">
                    {postData.postdesc}
                    </Typography>
                </CardContent>
                {postData.contentpkg.length>0 && (
                    <CardPv 
                        postData={postData}
                    />
                )}
                
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" onClick={favoriteEvent}>
                    {favoriteFlg? <FavoriteIcon /> :<FavoriteBorderIcon />}
                    </IconButton>
                    {favoriteCount > 0 ? favoriteCount: null}
                    <IconButton aria-label="share" onClick={replyEvent} >
                    <ChatBubbleOutlineIcon />
                    </IconButton>
                    {commentCount > 0 ? commentCount :null}
                </CardActions>
                    
            </Card>
            {moreFlg && (<HomeDialog 
                moreFlg = {moreFlg}
                setMoreFlg = {setMoreFlg}
            />)}
        </>
    )
}

export default CardItem;
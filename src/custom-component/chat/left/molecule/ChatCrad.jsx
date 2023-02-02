import { Avatar, Card, CardHeader, Typography } from "@mui/material"
import { useRouter } from "next/router";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { setTarget } from "src/redux/targetSlice";


// eslint-disable-next-line arrow-body-style
const ChatCrad = ({chatData}) => {
        const [dotFlg, setDotFlg] = useState(true);
        const navigate = useRouter();
        const dispatch = useDispatch();
        const styleObj = {
            width: '80%',
            marginLeft : '80px',
        //   height: '100%',
            textAlign: 'left',
            fontSize: '14px',
        }

        const dotStyle = {
            position: 'relative',
            display: 'inline-block',
            width: '8px',
            height: '8px',
            textIndent: '-999px',
            overflow: 'hidden',
            bottom: '6px',
            left: '0',
            borderRadius: '10px',
            lineHeight: '1',
            background: 'red',
        }

        const hoverstyle= {
            "&:hover": {
            background: "grey"
            },
            cursor:'pointer',
            
        }

        const clickEvent = () => {
            console.log('target',chatData);
            setDotFlg(false);
            dispatch(setTarget({
                target: chatData
            }))
            navigate.push(`/chat/${chatData.nick}`);
        }

        const idChange = (nick) => {
            if (nick.length > 12) {
                return `${nick.substr(0, 11)}...`;
            }
            return nick;
        };

        const contentChange = (content) => {
            if (content.length > 12) {
                return `${content.substr(0, 12)}...`;
            }
            return content;
        };

        return(
            <>
                <CardHeader
                avatar={
                <Avatar alt="" src={chatData.profileimg_url}>
                    R
                </Avatar>
                }
                action={
                    <span style={dotFlg ? dotStyle: null} />
                }
                title={idChange(chatData.nick)}
                subheader={contentChange(chatData.lastmessage)}
                titleTypographyProps={{variant:'subtitle1' }}
                subheaderTypographyProps={{variant:'subtitle2'}}
                style={hoverstyle}
                // sx={{cursor:'pointer'}}
                // className={hoverstyle}
                onClick={clickEvent}
                />
                <div style={styleObj}>
                    {/* {recommandData.profile_desc} */}
                </div>
            </>
        )
}

export default ChatCrad
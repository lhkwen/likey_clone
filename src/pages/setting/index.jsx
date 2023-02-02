import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { logout, selectUser } from "src/redux/userSlice";
import { useRouter } from "next/router";
import { logoutAuth } from "src/redux/authSlice";
import ContentLayout from "src/layouts/content/ContentLayout";
import { Button, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material";
import withAuth from "src/hooks/withAuth";
import Header from "src/custom-component/setting/organism/Header";
import HomeLayout from "src/layouts/content/HomeLayout";

const Setting = () => {
    const navigate = useRouter();
    const dispatch = useDispatch();

    const logoutEvent = () => {
        dispatch(logout());
        dispatch(logoutAuth());
        // alert("로그아웃");
        navigate.push("/login");
    }
    return(
        <HomeLayout title="setting">
            <Header/>
            <List sx={{width:'100%'}} >
                <ListItem >
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="1">
                        <Typography  variant="subtitle2" >프로필편집</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="2">
                        <Typography  variant="subtitle2" >알림</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="3">
                        <Typography  variant="subtitle2" >차단한 계정</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="4">
                        <Typography  variant="subtitle2" >팔로우와 메시지 받기</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="5">
                        <Typography  variant="subtitle2" >계정 정보</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="6">
                        <Typography  variant="subtitle2" >보안</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="7">
                        <Typography  variant="subtitle2" >크리에이터 계정으로 변경 신청</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <Divider/>
                <Divider/>
                <Divider/>
                <Divider/>
                <Divider/>
                <Divider/>
                <ListItem>
                    <ListItemButton sx={{display: 'flex', justifyContent: "space-between"}} key="8" onClick={()=>logoutEvent()}>
                        <Typography  variant="subtitle2" >로그아웃</Typography>
                        <div>&gt;</div>
                    </ListItemButton>
                </ListItem>
            </List>
        </HomeLayout>
    )
}

export default withAuth(Setting);
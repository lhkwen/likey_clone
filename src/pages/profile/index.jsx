import { Divider } from "@mui/material";
import React from "react";
import Header from "src/custom-component/profile/organism/Header";
import ProfileCard from "src/custom-component/profile/organism/ProfileCard";
import SubContent from "src/custom-component/subscribe/template/SubContent";
import HomeLayout from "src/layouts/content/HomeLayout";

const Profile = () => {
    console.log('d');
    return(
        <HomeLayout title="profile">
            <Header/>
            <ProfileCard />
            <Divider/><Divider/><Divider/><Divider/>
            <SubContent/>
        </HomeLayout>
    )
}

export default Profile
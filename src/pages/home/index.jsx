import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect , useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Header from "src/custom-component/home/organism/Header";
import HomeTab from "src/custom-component/home/template/HomeTab";
import withAuth from "src/hooks/withAuth";
import HomeLayout from "src/layouts/content/HomeLayout";
import { selectAuth ,logoutAuth} from "src/redux/authSlice";
import { selectUser, logout } from "src/redux/userSlice";


const Home = () => (
        <HomeLayout>
            <Header/>
            <HomeTab/>
        </HomeLayout>
    )

export default withAuth(Home);
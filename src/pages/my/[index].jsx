import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import CardBottom from "src/custom-component/card/organism/CardBottom";
import CardContent from "src/custom-component/my/template/CardContent";
import Header from "src/custom-component/my/organism/Header";
import HomeLayout from "src/layouts/content/HomeLayout";
import { selectUser } from "src/redux/userSlice";


function My () {
        const [commentData, setCommentData] = useState([]);
    // const user = useSelector(selectUser);
    // const navigate = useRouter();
    // useEffect(()=> {
    //     if(!user.user) {
    //         navigate.push('/login')
    //     }
    // },[navigate, user])

    return(
        <HomeLayout>
            <Header />
            <CardContent />
             <CardBottom 
            commentData={commentData}
            setCommentData={setCommentData}
        />
        </HomeLayout>
    )
}

export default My;
import React from "react";
import Header from "src/custom-component/paysetting/organism/Header";
import PaySettingTab from "src/custom-component/paysetting/template/PaySettingTab";
import withAuth from "src/hooks/withAuth";
import HomeLayout from "src/layouts/content/HomeLayout";


const paysetting = () => {
    console.log('결제관리')
    return(
        <HomeLayout >
            <Header/>
            <PaySettingTab />
        </HomeLayout>
    )
}

export default withAuth(paysetting);
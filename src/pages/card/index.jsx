import React from "react"
import CardAgree from "src/custom-component/mycard/organism/CardAgree";
import CardMethod from "src/custom-component/mycard/organism/CardMethod";
import Header from "src/custom-component/mycard/organism/Header";
import withAuth from "src/hooks/withAuth";
import HomeLayout from "src/layouts/content/HomeLayout";

const index = () => {
    console.log();
    return(
        <HomeLayout title="setting">
            <Header/>
            <CardMethod />
            <CardAgree />
        </HomeLayout>
    )
}

export default withAuth(index)
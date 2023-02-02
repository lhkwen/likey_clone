import React from "react"
import CardContent from "src/custom-component/explore/template/CardContent";
import Header from "src/custom-component/explore/organism/Header";
import HomeLayout from "src/layouts/content/HomeLayout";

const explore = () => {
    console.log('dd');
    return(
        <HomeLayout>
            <Header />
            <CardContent />
        </HomeLayout>
        
    )
}

export default explore
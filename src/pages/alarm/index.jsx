import React from "react";
import Header from "src/custom-component/alarm/organism/Header";
import AlarmCard from "src/custom-component/alarm/template/AlarmCard";

import withAuth from "src/hooks/withAuth";
import HomeLayout from "src/layouts/content/HomeLayout";


const alarm = () => {
    console.log('chk')
   
    return(
        <HomeLayout>
            <Header/>
            <AlarmCard/>
            {/* <AlarmContent/> */}
        </HomeLayout>
    )
}


export default withAuth(alarm);
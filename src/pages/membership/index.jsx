import React from "react"
import Header from "src/custom-component/membership/organism/Header";
import MembershipTab from "src/custom-component/membership/organism/MembershipTab";
import HomeLayout from "src/layouts/content/HomeLayout";

const Membership = () => {
    console.log('');
    return(
        <HomeLayout>
            <Header />
            <MembershipTab/>
        </HomeLayout>
    )
}

export default Membership
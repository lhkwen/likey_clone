import React from "react"
import Header from "src/custom-component/recommand/organism/Header"
import RecommandContent from "src/custom-component/recommand/template/RecommandContent"
import HomeLayout from "src/layouts/content/HomeLayout"

const recommend = () => {
    console.log('d')
    return(
        <HomeLayout>
            <Header/>
            <RecommandContent/>
        </HomeLayout>
        )
}

export default recommend;
import { useRouter } from "next/router";
import React from "react"
import { useGetCreatorQuery } from "src/api/services/creator"
import CardContent from "src/custom-component/creator/template/CardContent";
import Header from "src/custom-component/explore/detail/organism/Header";
import withAuth from "src/hooks/withAuth";
import HomeLayout from "src/layouts/content/HomeLayout";

function Detail () {
    const navigate = useRouter();
    const {data, isSuccess} = useGetCreatorQuery({
        profile_id: navigate.query.index
    })
    console.log(data);
    return(
        <HomeLayout>
            <Header />
            {isSuccess && (<CardContent data={data.data}/>)}
        </HomeLayout>
    )
}

export default withAuth(Detail)
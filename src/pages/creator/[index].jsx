import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetCreatorQuery } from "src/api/services/creator";
import CreatorHeader from "src/custom-component/creator/template/CreatorHeader";
import HomeLayout from "src/layouts/content/HomeLayout";
import { selectPost } from "src/redux/postSlice";
import { selectUser } from "src/redux/userSlice";


function Creator () {
    const navigate = useRouter();

    const {data, isSuccess} = useGetCreatorQuery({
        profile_id: navigate.query.index
    });

    return(
        <HomeLayout>
            {isSuccess && (<CreatorHeader data={data.data}/>)}
        </HomeLayout>
    )
}

export default Creator;
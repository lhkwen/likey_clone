import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetCreatorQuery,creatorApi } from "src/api/services/creator";
import CreatorHeader from "src/custom-component/creator/template/CreatorHeader";
import HomeLayout from "src/layouts/content/HomeLayout";
import { selectPost } from "src/redux/postSlice";
import { selectUser } from "src/redux/userSlice";
import { GetServerSideProps } from 'next'

function Creator ({data}) {
    const navigate = useRouter();
    console.log('data',data);
    // const {data, isSuccess} = useGetCreatorQuery({
    //     profile_id: navigate.query.index
    // });

    return(
        <HomeLayout>
            <CreatorHeader data={data.data}/>
            {/* {isSuccess && (<CreatorHeader data={data.data}/>)} */}
        </HomeLayout>
    )
}

export default Creator;

export const getServerSideProps = async (props) => {
    // const {data, isSuccess} = useGetCreatorQuery({
    //     profile_id: navigate.query.index
    // });
    // const store = {};
    // await store.dispatch(creatorApi.endpoints.getCreator.initiate());
    // const {data} = creatorApi.endpoints.getCreator.select()(store.getState())
    // const initaldata = data;
    // await store.dispatch(creatorApi.endpoints.getCreator)
    
    const res = await fetch(`https://dev-api.fancoo.com/v1/profiles/${props.params.index}/by/profileid`)
    const data= await res.json();
    return { props: { data } }
}
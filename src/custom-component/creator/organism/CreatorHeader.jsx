import React from "react"
import CreatorCard from "../molecule/CreatorCard";
import CreatorImg from "../molecule/CreatorImg"
import CreatorTab from "../molecule/CreatorTab";

const CreatorHeader = ({data}) => (
        <>
            <CreatorImg data={data}/>
            <CreatorCard data={data} />
            <CreatorTab data={data}/>
        </>
    )

export default CreatorHeader;
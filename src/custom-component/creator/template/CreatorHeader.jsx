import React from "react"
import CreatorCard from "../organism/CreatorCard";
import CreatorImg from "../organism/CreatorImg"
import CreatorTab from "./CreatorTab";

const CreatorHeader = ({data}) => (
        <>
            <CreatorImg data={data}/>
            <CreatorCard data={data} />
            <CreatorTab data={data}/>
        </>
    )

export default CreatorHeader;
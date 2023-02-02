import React, { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { useGetCreatorPostQuery } from "src/api/services/creatorPost";
import { selectUser } from "src/redux/userSlice";
import CardItem from "../../home/organism/CardItem";

const CardContent = ({data}) => {
    const [poffset, setOffset] = useState(0);
    const [plimit, setLimit] = useState(20);
    const user = useSelector(selectUser);
    const {data: postData, isFetching, isSuccess} = useGetCreatorPostQuery({
        offset:poffset,
        limit:plimit,
        idx:data.profile_idx
    });
    const [list, setList] = useState([]);

    const onScroll = () => {
            const scrolledBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
            if(scrolledBottom && !isFetching) {
                if(postData.data.length<20) {
                    return;
                }
                setOffset(poffset+20);
                window.scrollTo(0,document.documentElement.scrollTop-1);
            }
    }

    useEffect(()=> {
        document.addEventListener("scroll", onScroll);
       // console.log(data.data);
        if(isSuccess) {
            console.log('list',list);
            console.log('postdta',...postData.data)
            setList(prev => [...prev, ...postData.data])
        }
        return function () {
        document.removeEventListener("scroll", onScroll);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[poffset,isFetching])



    return (
        <>
        {list.map((CreatorData,idx)=> (
            <React.Fragment key={CreatorData.post_idx}>
                <CardItem postData={CreatorData}/>
            </React.Fragment>
            
        ))}
        </>
        
    )
}

export default CardContent;
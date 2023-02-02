import React, { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { useGetHomeQuery } from "src/api/services/home";
import { selectUser } from "src/redux/userSlice";
import CardItem from "../../home/organism/CardItem";
import HorizonalBar from "../../home/organism/HorizonalBar"

const CardContent = () => {
    const [poffset, setOffset] = useState(0);
    const [plimit, setLimit] = useState(20);
    const user = useSelector(selectUser);
    const {data, isFetching, isSuccess} = useGetHomeQuery({
        offset:poffset,
        limit:plimit,
        idx:user.user.user_idx
    });
    const [list, setList] = useState([]);

    const onScroll = () => {
        const scrolledBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
        if(scrolledBottom && !isFetching) {
            setOffset(poffset+20);
            window.scrollTo(0,document.documentElement.scrollTop-1);
        }
    }
    useEffect(()=> {
        document.addEventListener("scroll", onScroll);
       // console.log(data.data);
        if(isSuccess) {
        setList(prev => [...prev, ...data.data])
        }
        return function () {
        document.removeEventListener("scroll", onScroll);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[poffset,isFetching])



    return (
        <>
        {list.map((postData,idx)=> (
            <React.Fragment key={postData.post_idx}>
                <CardItem postData={postData}/>
            </React.Fragment>
            
        ))}
        </>
        
    )
}

export default CardContent;
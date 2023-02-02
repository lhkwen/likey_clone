import React, { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux";
import { useGetHomeQuery } from "src/api/services/home";
import { selectUser } from "src/redux/userSlice";
import HorizonalBar from "../../home/organism/HorizonalBar"
import CardItem from "./CardItem";

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

    useEffect(()=> {
       // console.log(data.data);
        if(isSuccess) {
            const array = [];
            for (let i=0; i<data.data.length; i++) {
                if(data.data[i].contentpkg.length !== 0) {
                    array.push(data.data[i]);
                }
            }
            setList(prev => [...prev, ...array])
        }
        const onScroll = () => {
            const scrolledBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
            if(scrolledBottom && !isFetching) {
                setOffset(poffset+20);
                window.scrollTo(0,document.documentElement.scrollTop-1);
            }
        }
        document.addEventListener("scroll", onScroll);
        return function () {
        document.removeEventListener("scroll", onScroll);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[poffset,isFetching])

    const twoStyle = useMemo(()=>({
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }),[]);

    return (
        <div style={twoStyle}>
            {list.map((postData,idx)=> (
                <React.Fragment key={postData.post_idx}>
                    <CardItem postData={postData}/>
                </React.Fragment>
                
            ))}
        </div>
        
    )
}

export default CardContent;
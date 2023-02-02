import {  Card, Typography } from "@mui/material"
import React, { useState , useEffect } from "react"
import { useGetRecommandQuery } from "src/api/services/recommend";
import { selectUser } from "src/redux/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import RecommandCard from "./RecommandCard";


const Recommand = () => {
    const [list, setList] = useState([]);
    const navigate = useRouter();
    const user = useSelector(selectUser);
    const styleObj = {
        width: '350px',
        marginLeft: '40px',
        marginTop: '50px',
        height: '450px',
    }

    const headerObj = {
        marginLeft: '15px',
        marginTop: '15px'
    }

    const moreObj = {
        paddingTop: '25px',
        paddingLeft: '25px',
        cursor:'pointer',
        fontSize: '12px',
        fontWeight: 'bold',
    }


    const {data, isSuccess} = useGetRecommandQuery({
        idx:user.user.user_idx
    });

    useEffect(()=> {
        if(isSuccess){
            if(data?.data?.length > 5) {
                const obj = [];
                for(let i=0; i<5; i++ ){
                    obj.push(data.data[i]);
                }
                setList(obj);
            }else{
                setList(data.data);
            }
            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSuccess])
    
    const clickEvent= () => {
        navigate.push('/recommand');
    }
    
    return(    
        <Card style={styleObj}>
            <div style={headerObj}>
                <Typography variant="h6">회원님을 위한 추천 </Typography> 
            </div>
            {list.map((recommandData,idx)=> (
                <React.Fragment key={recommandData.userseq}>
                    <RecommandCard recommandData={recommandData}/>
                </React.Fragment>
                
            ))}
            <Typography variant="body2" style={moreObj} onClick={clickEvent}>더보기 </Typography> 
            
                
        </Card>
        )
    }

export default Recommand
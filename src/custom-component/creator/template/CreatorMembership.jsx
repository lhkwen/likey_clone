import React, { useEffect, useMemo, useState } from "react"
import { useGetMembershipQuery } from "src/api/services/membership";
import CreatorMemberCard from "../organism/CreatorMemberCard"

const CreatorMembership = ({data}) => {
    const [list, setList] = useState([]);
    const {data:memberData, isSuccess} = useGetMembershipQuery({
        idx: data.profile_idx
    })

    useEffect(()=> {
        if(isSuccess) {
            setList(memberData.data);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isSuccess])

    const padStyle = useMemo(()=> ({
        padding: '30px'
    }),[])

    return(
        <div style={padStyle}>
            {list.map((mdata, idx)=>(
                <React.Fragment key={mdata.grade_idx}>
                    <CreatorMemberCard mData={mdata}/>
                </React.Fragment>
            ))}
        </div>
       
    )
}

export default CreatorMembership
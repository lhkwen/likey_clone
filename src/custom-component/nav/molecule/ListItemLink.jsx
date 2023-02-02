import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "src/redux/userSlice";


export default function ListItemLink({icon, primary, to}) {
    const user = useSelector(selectUser);
    const navigate = useRouter();
    const menuMove = (link) => {
        if(user.user===null) {
            navigate.push('/login')
        }else {
        navigate.push(link);
        }

    }

    return(
        <li>
            <ListItemButton  onClick={()=>menuMove(to)} >
                {icon?<ListItemIcon>{icon}</ListItemIcon>:null}
                <ListItemText primary={primary} />
            </ListItemButton>
        </li>
    )
}
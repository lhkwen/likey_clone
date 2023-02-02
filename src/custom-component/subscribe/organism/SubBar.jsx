import { Avatar, Button, Card, CardHeader, Hidden, IconButton } from "@mui/material";
import { red } from '@mui/material/colors';
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SubItem from "./SubItem";

const SubBar = ({subData}) => (
        <SubItem subData={subData} />
    )

export default SubBar;
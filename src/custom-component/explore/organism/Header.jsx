import { Button, Divider, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const navigate = useRouter();

    const historyGo = () => {
        navigate.back();
    }
    return(
        <>
            <div>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                 >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search"  >
                    <SearchIcon />
                </IconButton>
                 <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    // onChange={inputChangeEvent}
                />

                </Paper>
                {/* <Button onClick={historyGo}>&lt; 검색</Button> */}
            </div>
            <Divider/>
        </>
    )
}

export default Header;
import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import CustomButton from '../CustomButton/CustomButton';


function Header() {

    const nav_titles = [{
        path: '/',
        display: 'Home'
    },
    {
        path: '/',
        display: 'Dishes'
    },
    {
        path: '/',
        display: 'Services'
    },
    {
        path: '/',
        display: 'About us'
    }]

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const NavBarLink = styled(Typography)(() => ({
        fontSize: "15px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        '&:hover': {
            color: "#ffff",
        },
    }));


    return (

        <Box>
            <Box>
                <NavBarLinksBox>
                    {
                        nav_titles.map((item, index) => (
                            // eslint-disable-next-line react/jsx-key
                            <NavBarLink variant="body2">
                                {item.display}
                            </NavBarLink>
                        ))
                    }
                </NavBarLinksBox>
            </Box>

            <Box>
                <NavBarLink variant="body2">
                    Sign Up
                </NavBarLink>

                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="black"
                    buttonText="Register"
                />
            </Box>

        </Box>

    );
}

export default Header;
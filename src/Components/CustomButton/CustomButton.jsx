/* eslint-disable react/prop-types */
import React from "react";
import { styled } from '@mui/system';
import { Button } from '@mui/material';


const CustomButton = ({
        backgroundcolor,
        color,
        buttonText,
        welcomeBtn,
        guideBtn,
        getStartedBtn,
    }) => {
        const CustomButton = styled(Button)(({ theme }) => ({
            backgroundcolor: backgroundcolor,
            color: color,
            fontWeight: "700",
            fontSize: "14px",
            cursor: "pointer",
            padding: "0.5rem 1.25rem",
            borderRadius: "7px",
            textTransform: "none",
            display: "block",
            border: "2px solid transparent",
            "&:hover": {
                backgroundcolor: color,
                color: backgroundcolor,
                borderColor: backgroundcolor,
            },
            [theme.breakpoints.down("md")]: {
                margin: (welcomeBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
                width: (welcomeBtn || getStartedBtn) && "90",
            },
            [theme.breakpoints.down("sm")]: {
                marginTop: guideBtn && theme.spacing(3),
                width: guideBtn && "90",
            },
        }));

        return (
            <CustomButton>
                {buttonText}
            </CustomButton>
        );
    };


export default CustomButton;
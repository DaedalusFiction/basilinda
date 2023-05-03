import { Box, Typography } from "@mui/material";
import React from "react";

const TextJustify = ({ children }) => {
    const textArray = children.split("");
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 .9rem 0 0",
            }}
        >
            {textArray.map((word, index) => {
                return (
                    <Box key={index} sx={{}}>
                        <Typography
                            sx={{
                                fontStyle: "italic",
                                fontFamily: "LibreBaskerville",
                            }}
                        >
                            {word}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default TextJustify;

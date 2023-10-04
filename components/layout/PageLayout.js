import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const PageLayout = ({ name, children }) => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 1), rgba(39, 45, 45, 0.65)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    padding: "8rem 0 2rem 0",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: "center",
                            textTransform: "uppercase",
                        }}
                    >
                        {name}
                    </Typography>
                    {children}
                </Container>
            </Box>
        </>
    );
};

export default PageLayout;

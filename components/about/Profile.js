import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ImageFadeIn from "../general/ImageFadeIn";

const Profile = ({ profile, children }) => {
    return (
        <Box sx={{ marginBottom: "2rem" }}>
            <ImageFadeIn src={profile.image.url} height={650} width={500} />
            <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "1rem" }}
            >
                {profile.name}
            </Typography>

            <Divider
                sx={{
                    maxWidth: "10rem",
                    margin: "0 auto 1rem auto",
                }}
            />
            {children}
        </Box>
    );
};

export default Profile;

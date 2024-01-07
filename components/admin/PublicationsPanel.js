import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import useGetImages from "../../hooks/useGetImages";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const PublicationsPanel = ({ updateCounter, setUpdateCounter, folder }) => {
    const [isShowing, setIsShowing] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [images] = useGetImages(updateCounter, folder);
    const handleDeletePublication = async (p) => {
        console.log("hi");
        console.log(p);
        await deleteDoc(doc(db, "publications", p));
        setUpdateCounter(updateCounter + 1);
    };
    return (
        <Box sx={{ padding: "1rem" }}>
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography variant="h4">Published Items:</Typography>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsShowing(!isShowing);
                    }}
                >
                    {isShowing ? "Hide" : "show"}
                </Button>
            </Box>
            {isShowing &&
                images.map((publication, index) => {
                    return (
                        <Box
                            key={index}
                            sx={{
                                margin: ".5rem",
                                padding: ".5rem",
                                border:
                                    "1px solid " +
                                    theme.palette.custom.lightMuted,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography>
                                {publication.data().fields[0].value}
                            </Typography>
                            <ButtonWithConfirm
                                buttonText="Delete"
                                dialogText="Delete this item from publications?"
                                notificationText="deleting..."
                                isDisabled={isDisabled}
                                handleClick={() => {
                                    console.log(publication.data().id);
                                    handleDeletePublication(publication.id);
                                }}
                            />
                        </Box>
                    );
                })}
        </Box>
    );
};

export default PublicationsPanel;

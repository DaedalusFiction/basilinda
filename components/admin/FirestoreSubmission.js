import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import Link from "next/link";
import React, { useState } from "react";
import { db, storage } from "../../firebase";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";
import RejectionButton from "./RejectionButton";

const FirestoreSubmission = ({
    updateCounter,
    setUpdateCounter,
    submission,
    folder,
}) => {
    const [expanded, setExpanded] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const handleMarkAsRead = async () => {
        await updateDoc(doc(db, folder, submission.id), { isRead: true });
        setUpdateCounter(updateCounter + 1);
    };
    return (
        <Box
            sx={{
                border: "1px solid " + theme.palette.custom.darkMuted,
                padding: ".25rem 1rem",
                margin: ".5rem 0",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography>
                    {submission.data().id} - {submission.data().fileName} -{" "}
                    {submission.data().fields[2].value}
                </Typography>
                <Box>
                    <IconButton onClick={toggleExpand}>
                        {expanded ? (
                            <ArrowUpward style={{ color: "black" }} />
                        ) : (
                            <ArrowDownward style={{ color: "black" }} />
                        )}
                    </IconButton>
                </Box>
            </Box>
            {expanded && (
                <Box
                    sx={{
                        border: "1px solid " + theme.palette.custom.darkMuted,
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".75rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography>
                            File Name: {submission.data().fileName}
                        </Typography>
                        <a
                            href={submission.data().textFileURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="contained">Download</Button>
                        </a>
                    </Box>
                    <Divider />
                    {submission.data().fields.map((field, index) => {
                        return (
                            <Typography key={index}>
                                {`${field.name}: ${field.value}`}
                            </Typography>
                        );
                    })}
                    <Box sx={{ display: "flex", gap: "1rem" }}>
                        <ButtonWithConfirm
                            buttonText="Mark as Read"
                            dialogText="Mark as read?"
                            notificationText="Updating..."
                            handleClick={handleMarkAsRead}
                            isDisabled={isDisabled}
                        />
                        {/* <RejectionButton
                            submission={submission}
                            updateCounter={updateCounter}
                            setUpdateCounter={setUpdateCounter}
                        /> */}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default FirestoreSubmission;

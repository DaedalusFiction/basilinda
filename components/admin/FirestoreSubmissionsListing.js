import { ArrowDownward } from "@mui/icons-material";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useGetSubmissions from "../../hooks/useGetSubmissions";
import FirestoreSubmission from "./FirestoreSubmission";
import { useState } from "react";

const FirestoreSubmissionsListing = ({
    folder,
    updateCounter,
    setUpdateCounter,
    title,
}) => {
    const [submissions] = useGetSubmissions(updateCounter, folder);
    const [isShowingUnread, setIsShowingUnread] = useState(false);
    const [isShowingRead, setIsShowingRead] = useState(false);
    return (
        <Box>
            <Typography variant="h3">{title}</Typography>
            <br />
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography variant="h4">Unread:</Typography>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsShowingUnread(!isShowingUnread);
                    }}
                >
                    {isShowingUnread ? "Hide" : "show"}
                </Button>
            </Box>
            {isShowingUnread &&
                submissions &&
                submissions.map((submission, index) => {
                    if (!submission.data().isRead) {
                        return (
                            <FirestoreSubmission
                                folder={folder}
                                updateCounter={updateCounter}
                                setUpdateCounter={setUpdateCounter}
                                submission={submission}
                                key={index}
                            />
                        );
                    }
                })}
            <br />
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography variant="h4">Read:</Typography>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsShowingRead(!isShowingRead);
                    }}
                >
                    {isShowingRead ? "Hide" : "show"}
                </Button>
            </Box>
            {isShowingRead && submissions && (
                <Box>
                    {submissions.map((submission, index) => {
                        if (submission.data().isRead) {
                            return (
                                <FirestoreSubmission
                                    folder={folder}
                                    updateCounter={updateCounter}
                                    setUpdateCounter={setUpdateCounter}
                                    submission={submission}
                                    key={index}
                                />
                            );
                        }
                    })}
                    <Typography sx={{ textAlign: "center" }}>
                        If there is a past submission you would like to view,
                        contact Dave at djs41286@gmail.com
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default FirestoreSubmissionsListing;

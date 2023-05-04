import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import Link from "next/link";

const index = () => {
    return (
        <PageLayout name="How to Play">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ margin: "4rem 0" }}>
                            <Typography>
                                <em>Basilinda</em> is currently accepting
                                submissions in the form of poetry, multimedia
                                arts, and letters. We want works that push
                                traditional boundaries with an emphasis on
                                risky, confessional, transgressional, and
                                challenging subject matters. To win this round,
                                be less preoccupied with epiphany and more
                                focused on curling our toes. Like we said, this
                                is a whole new level&mdash;so don&rsquo;t be
                                afraid to break create the rules, challenge our
                                expectations and, most importantly, make us
                                think. We encourage both emerging and
                                established artists to submit their finest works
                                and we are especially committed to uplifting the
                                voices of those who identify as women and/or
                                non-binary.
                            </Typography>

                            <br />

                            <List>
                                <ListItem>
                                    <ListItemText>
                                        All submissions should be emailed
                                        directly to{" "}
                                        <strong>
                                            teardownthismall@gmail.com
                                        </strong>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        In the subject of the email, print your
                                        NAME and TITLE of your submission.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Copy and paste the body of your
                                        submission directly into the body of
                                        your email. Please note that proper
                                        formatting is extremely important. If
                                        your submission is improperly formatted,
                                        we may ask you to reformat it before
                                        acceptance.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        We accept simultaneous submissions but
                                        please let us know if you work was
                                        accepted elsewhere.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        We are not interested in bigoted,
                                        homophobic, racist, transphobic, or
                                        ableist, dogmatic, right-wing, sexist,
                                        closed-minded, unfunny, conservative, or
                                        unnecessarily sarcastic works.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >
                                    Have a question or comment?{" "}
                                    <span
                                        style={{
                                            textDecoration: "underline",
                                        }}
                                    >
                                        <Link href="contact">Contact us.</Link>
                                    </span>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <TextSubmissionsForm
                            config={textSubmissionsConfig}
                            folder="storysubmissions"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ImageSubmissionsForm
                            config={imageSubmissionsConfig}
                            folder="imagesubmissions"
                        />
                    </Grid> */}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;

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
        <Container>
            <PageLayout name="Submissions Guidelines">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Box sx={{ margin: "4rem 0" }}>
                                {/* <Typography>
                                    CURBITURE only publishes the dumbest shit.
                                    But we don&rsquo;t mean this in a
                                    self-deprecatory way--we like the stuff we
                                    print, and we would only print it if we
                                    thought you&rsquo;d like it too.
                                </Typography>
                                <br /> */}
                                <Typography variant="h4" component="h3">
                                    What we Publish:
                                </Typography>
                                <br />
                                <Typography>
                                    Basilinda accepts submissions in the form of
                                    visual art, poetry, songs, and letters from
                                    everyone with a strong preference for
                                    players who identify as women and/or
                                    non-binary. We are committed to publishing
                                    writers, musicians, and artists from diverse
                                    backgrounds, encouraging both emerging and
                                    established creators to submit their finest
                                    works. We are most interested in works
                                    showcasing subversion and strategy with
                                    fine-tuned tactic. Which is to say, move
                                    your idea-pieces like confident vectors
                                    across the board&mdash;with magnitudes of
                                    depth and unwavering direction&mdash;and you
                                    may succeed in taking down the king.
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            Poetry: Emphasis on Confessional
                                            Poetry
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>Visual Art</ListItemText>
                                    </ListItem>
                                </List>
                                <Typography variant="h4">
                                    Tips & Tricks
                                </Typography>
                                <br />
                                <Typography>
                                    To win this round, play with a focus on
                                    individuality, versatility, and victory. Be
                                    less preoccupied with epiphany, and more so
                                    with keeping us on our toes. Like we said,
                                    this is a whole new level&mdash;so
                                    don&rsquo;t be afraid to break the rules,
                                    challenge our expectations and, most
                                    importantly, make us <strong>think.</strong>
                                </Typography>
                                <br />
                                <Typography variant="h4">
                                    How to Play
                                </Typography>

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
                                            In the subject of the email, print
                                            your NAME and TITLE of your
                                            submission.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Copy and paste the body of your
                                            submission directly into the body of
                                            your email. Please note that proper
                                            formatting is extremely important.
                                            If your submission is improperly
                                            formatted, we may ask you to
                                            reformat it before acceptance.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            We accept simultaneous submissions
                                            but please let us know if you work
                                            was accepted elsewhere.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            We are not interested in bigoted,
                                            homophobic, racist, transphobic, or
                                            ableist, dogmatic, right-wing,
                                            sexist, closed-minded, unfunny,
                                            conservative, or unnecessarily
                                            sarcastic works.
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
                                            <Link href="contact">
                                                Contact us.
                                            </Link>
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
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
            </PageLayout>
        </Container>
    );
};

export default index;

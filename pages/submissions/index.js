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
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box sx={{ margin: "4rem 0" }}>
                            <Typography
                                variant="h3"
                                sx={{ textAlign: "center" }}
                            >
                                What We Publish
                            </Typography>
                            <br />
                            <Typography>
                                Basilinda accepts submissions in the form of
                                poetry, letters, genrequeer (hermit crab) forms,
                                and mixed media. We are most interested in
                                genre-bending works exploring personal truths
                                and identities through strategic subversion with
                                fine-tuned tactic. To win this round, be less
                                preoccupied with epiphany and more focused on
                                curling our toes. Focus on pushing traditional
                                boundaries through the exploration of risky,
                                confessional, transgressional, and challenging
                                subject matters. Like we said, this is a whole
                                new level—so don&rsquo;t be afraid to{" "}
                                <span
                                    style={{ textDecoration: "line-through" }}
                                >
                                    break
                                </span>{" "}
                                create the rules, challenge our expectations
                                and, most importantly, make us think.
                            </Typography>

                            <br />
                            <br />
                            <Typography variant="h4">
                                GENERAL GUIDELINES
                            </Typography>

                            <List>
                                <ListItem>
                                    <ListItemText>
                                        All submissions should be emailed
                                        directly to{" "}
                                        <em>teardownthismall@gmail.com</em>
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Do{" "}
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            not
                                        </span>{" "}
                                        include any personal information such as
                                        name, email, or any other contact info
                                        on your submitted documents
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        For poetry and letter submissions, use a
                                        legible font such as Times New Roman,
                                        Garamond, or Calibri.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />
                            <br />
                            <Typography
                                variant="h3"
                                sx={{ textAlign: "center" }}
                            >
                                Poetry
                            </Typography>
                            <br />
                            <Typography>
                                We are interested in confessional,
                                identity-driven poetry that pushes the
                                boundaries of genre and language. Poems that
                                tackle risky subject matter and explore the
                                physical experience of the body are especially
                                welcome. We love work that challenges
                                expectations, builds complex structures of sound
                                and thought, and creates a new set of rules by
                                which to play.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        You may submit up to 5 poems at a time,
                                        using the form below. Poems should be
                                        attached in a single document, either as
                                        a .pdf or .docx file.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        We welcome long-form poetry.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />
                            <br />
                            <Typography
                                variant="h3"
                                sx={{ textAlign: "center" }}
                            >
                                Genrequeer
                            </Typography>
                            <br />
                            <Typography>
                                We are looking for poetry that crosses genre and
                                blurs the boundaries of form to explore new
                                edges of what a poem can be. This is not poetry
                                without form, but poetry that inhabits other
                                forms and uses form to add to the text. Imagine
                                a poem in the form of a Venn diagram, a how-to
                                manual, or a string of text messages. In her
                                forward to The Shell Game, Brenda Miller
                                identifies this genre-crossing approach as
                                hermit crab forms, describing the poem as
                                inhabiting the shell of another kind of document
                                the way that a hermit crab makes its home in the
                                borrowed shells of other mollusks. This shell
                                can be thought of as designed for a different
                                kind of text, but it offers structure and
                                protection to the soft material of poetry housed
                                within. To win this round, send us poetry that
                                wears a found shell.
                            </Typography>
                            <br />
                            <br />
                            <Typography
                                variant="h3"
                                sx={{ textAlign: "center" }}
                            >
                                Mixed Media
                            </Typography>
                            <br />
                            <Typography>
                                Art is not just a painting, a song, or a film –
                                it is all of these media and every combination,
                                destruction, and dissection of them. We are
                                seeking to amplify those voices most inclined to
                                bend these artistic forms, and those least
                                afraid to challenge the structures wishing to
                                constrain them. Queer voices have long been at
                                the forefront of art and culture for their
                                willingness to go beyond what has already been
                                seen or heard, into unknown and uncharted
                                territories. We encourage queer creators to
                                submit their art of any medium, to break the
                                rules, and continue this tradition of visionary
                                art.
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Feel free to submit your art in whatever
                                        form works best for you, and let us
                                        figure out the details.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        If you are unable to submit via the form
                                        below, please send your submission to
                                        teardownthismall@gmail.com
                                    </ListItemText>
                                </ListItem>
                            </List>

                            {/* <Box
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
                            </Box> */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export default index;

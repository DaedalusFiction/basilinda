import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";
import Profile from "../../components/about/Profile";
import { secondaryProfiles } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="">
            <Container maxWidth="lg">
                <Box className="section">
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                Our Mission
                            </Typography>
                            <br />
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                We may be named after the 19th-century board
                                game consisting of men and cannons, but we play
                                a different game. Our board incorporates players
                                and canons that have been historically
                                overlooked, invalidated, and silenced. Through
                                publishing, we seek to uplift and encourage the
                                exploration of identities that are constantly
                                evolving and thinking, shifting and persisting.
                            </Typography>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                About Us
                            </Typography>
                            <br />
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                Founded by a team of poets, writers, artists,
                                and musicians, <em>Basilinda</em> is an
                                experimental journal for queer artists. We
                                coalesced in Charlottesville, Virginia through a
                                shared love of inclusivity, community,
                                collaboration, and activism. Our creative
                                interests lie in the deeply personal and
                                cutting-edge: we want boundary-pushing art
                                exploring individual, interpersonal, and
                                collective experiences.
                            </Typography>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: {
                                        xs: "start",
                                        md: "center",
                                    },
                                }}
                            >
                                Curators
                            </Typography>
                            <br />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Profile profile={secondaryProfiles[0]}>
                                <Typography
                                    variant="body2"
                                    sx={{ marginBottom: "2rem" }}
                                >
                                    Sydney Cox is a person* based out of
                                    Charlottesville, Virginia. She graduated
                                    from The University of Virginia in 2022 with
                                    a degree in English. You know she is around
                                    when—in the midst of silence or sheer
                                    chaos—clackety croaks erupt from the throat
                                    of an 8-inch jumbo frog guiro. Her current
                                    special interests are gonads, found poetry,
                                    and the Surinam toad.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: ".75rem" }}
                                >
                                    *many find this statement contentious
                                    because she is in STEM.
                                </Typography>
                            </Profile>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Profile profile={secondaryProfiles[1]}>
                                <Typography variant="body2">
                                    At their best, Keri is a banned literature
                                    tomb raider and fledgling restoration
                                    researcher at The University of Virginia. At
                                    their worst, they are a furniture collector
                                    who exclusively speaks in sonnets. Each
                                    morning, they breathe in five metaphysical
                                    overtures and exhale them in one ensemble.
                                    Keri writes confessional and occasionally
                                    transcendentalist poetry. Many believe them
                                    to be a bit “persnickety” but they prefer to
                                    not label it. When Keri is not slithering
                                    around the English department, writing, or
                                    working on prints, they laboriously track
                                    vibe shifts in their haunted house which is
                                    only haunted by the virtue of them being in
                                    it.
                                </Typography>
                            </Profile>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Profile profile={secondaryProfiles[2]}>
                                <Typography variant="body2">
                                    Dave is an ancillary part of both Basilinda
                                    and the Charlottesville poetry scene. If you
                                    have any comments, suggestions, or deeply
                                    troubling concerns relating to the design or
                                    functionality of this website, please
                                    contact him posthaste.
                                </Typography>
                            </Profile>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;

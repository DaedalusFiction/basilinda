import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent, pages, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="ABOUT US">
            <AboutNavbar />
            <Container maxWidth="sm">
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>
                                <em>Basilinda</em> is a multimedia journal
                                inviting queer and feminist artists to
                                participate on a new level that didn&rsquo;t
                                come in the box, because we didn&rsquo;t come in
                                the box. We may be named after the 19th-century
                                board game consisting of men, cannons, and
                                captains, but that&rsquo;s not how we play here.
                                As a team of LGBTQIA+ and women editors whose
                                stories will never be cis white men&rsquo;s
                                canons, playing on this echelon means to be a
                                part of a broad and inclusive identity that is
                                constantly evolving and thinking, shifting and
                                persisting. We are interested in individuality,
                                versatility, and victory. We are most interested
                                in works exploring personal truths and
                                identities through strategic subversion with
                                fine-tuned tactics. Which is to say, move your
                                idea-pieces like confident vectors across the
                                board&mdash;with magnitudes of depth and
                                unwavering direction&mdash;and let us succeed in
                                taking down the king.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;

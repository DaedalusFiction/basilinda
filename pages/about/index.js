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
                                <em>Basilinda</em> is a journal centered at the
                                junction of identity, strategy and mobility. We
                                may be named after the 19th-century board game
                                consisting of men, cannons, and captains, but
                                that&rsquo;s not how we play here.
                            </Typography>
                            <br />
                            <Typography>
                                This version of Basilinda invites you to
                                participate on a new level that didn&rsquo;t
                                come in the box, because we didn&rsquo;t come in
                                the box. Our pieces don&rsquo;t solely consist
                                of cis white men and cannons, because our
                                stories will never be cis white men&rsquo;s
                                canons. No&mdash;playing on this echelon means
                                to be a part of a broad and inclusive identity
                                that is constantly evolving and thinking,
                                shifting and persisting. Our rules are
                                constantly changing, but this one must be
                                followed:{" "}
                            </Typography>
                            <br />
                            <Typography>
                                <strong>
                                    No misogynistic, homophobic, transphobic,
                                    racist etc. shit
                                </strong>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;

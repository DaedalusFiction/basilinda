import { Box, Container, Grid, Typography } from "@mui/material";
import ImageFadeIn from "../../../components/general/ImageFadeIn";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";
import NativeImage from "../../../components/general/NativeImage";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <Container maxWidth="md">
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12}>
                            <NativeImage
                                src="/images/womanWithCannon.svg"
                                maxSize={800}
                            />
                            <Typography
                                sx={{
                                    whiteSpace: "pre-wrap",
                                    textAlign: "center",
                                    marginTop: "1rem",
                                }}
                            >
                                It&rsquo;s not that we hate men <em>PER SE</em>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;

import { Box, Container, Grid, Typography } from "@mui/material";
import ShareIcons from "../general/ShareIcons";
import PublicationBody from "../publications/PublicationBody";
import theme from "../../styles/themes/theme";
import NativeImage from "../general/NativeImage";
import Link from "next/link";

const Publication = ({ publication, sidebarItems, sidebarCategory, image }) => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 0.65), rgba(39, 45, 45, 1)), url(/images/collage-background.webp)",
                    // "linear-gradient(rgba(233, 214, 214, 0.8), rgba(233, 224, 214, 0.8)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                    padding: "12rem 0 4rem 0",
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        sx={{
                            margin: ".25em 0",
                            fontSize: "3rem",
                            textAlign: "center",
                        }}
                        variant="h1"
                    >
                        {publication.fields[0].value}
                    </Typography>
                    <Typography
                        sx={{
                            fontStyle: "italic",
                            margin: ".25em 0",
                            fontSize: ".75rem",
                            textAlign: "center",
                        }}
                    >
                        by
                    </Typography>
                    <Typography
                        sx={{
                            margin: ".25em 0",
                            fontSize: "1.25rem",
                            textAlign: "center",
                            transition: "300ms",
                            "&:hover": {
                                color: theme.palette.primary.main,
                            },
                        }}
                    >
                        <Link
                            href={`/contributors/${publication.fields[1].value}`}
                        >
                            {publication.fields[1].value}
                        </Link>
                    </Typography>
                </Container>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={1} sx={{ position: "relative" }}>
                        <Box
                            sx={{
                                position: "sticky",
                                top: "6rem",
                                margin: {
                                    xs: "none",
                                    md: "20vh 1.25rem 1.25rem 1.25rem",
                                },
                            }}
                        >
                            <ShareIcons color={theme.palette.primary.main} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        {image && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                {publication.video ? (
                                    <video
                                        controls
                                        width="100%"
                                        // preload="metadata"
                                    >
                                        <source
                                            src={publication.URLs[0] + "#t=0.1"}
                                            type="video/mp4"
                                        />
                                    </video>
                                ) : (
                                    <Box>
                                        {publication.URLs.map(
                                            (image, index) => {
                                                return (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            margin: ".5rem 0",
                                                        }}
                                                    >
                                                        <NativeImage
                                                            src={image}
                                                            maxSize={800}
                                                            alt="mixed media post"
                                                        />
                                                    </Box>
                                                );
                                            }
                                        )}
                                    </Box>
                                )}
                            </Box>
                        )}
                        <Box>
                            <PublicationBody
                                sidebarCategory={sidebarCategory}
                                sidebarItems={sidebarItems}
                                story={publication}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Publication;

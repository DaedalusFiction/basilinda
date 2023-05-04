import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Meta />
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 0.65), rgba(39, 45, 45, 1)), url(/images/collage-background.webp)",
                    // "linear-gradient(rgba(233, 214, 214, 0.8), rgba(233, 224, 214, 0.8)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                    paddingTop: "12rem",
                    position: "relative",
                    marginBottom: "4rem",
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "column",
                }}
            >
                <Container maxWidth="xl" disableGutters>
                    <Container maxWidth="sm">
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Box>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    They shut me up in Prose &mdash;
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    As when a little Girl
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    They put me in the Closet &mdash;
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    Because they liked me &ldquo;still&rdquo;{" "}
                                    &mdash;
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    Still! Could themself have peeped &mdash;
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    And seen my Brain &mdash; go round &mdash;
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    They might as wise have lodged a Bird
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    For Treason &mdash; in the Pound &mdash;
                                </Typography>
                                <br />
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    Himself has but to will
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    And easy as a Star
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    Look down upon Captivity
                                </Typography>
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        color: theme.palette.custom.lightMuted,
                                    }}
                                >
                                    And laugh &mdash; No more have I &mdash;
                                </Typography>
                            </Box>
                        </Box>
                    </Container>

                    <Grid
                        container
                        spacing={0}
                        sx={{
                            marginTop: "8rem",
                            borderTop:
                                "2px solid " + theme.palette.custom.darkMuted,
                        }}
                        wrap="wrap-reverse"
                    >
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    // borderTop:
                                    //     "2px solid " + theme.palette.custom.lightMuted,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href="/publications/poetry">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                            margin: "2em 0",
                                        }}
                                    >
                                        Poetry
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/poetry">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/visualArtsHeader.png)",
                                        backgroundSize: "cover",
                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/mixedmedia">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/visArts.webp)",
                                        backgroundSize: "cover",

                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    // border:
                                    //     "1px solid " + theme.palette.custom.lightMuted,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href="/publications/mixedmedia">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                            margin: "2em 0",
                                        }}
                                    >
                                        Mixed Media
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={0}
                        sx={{
                            borderBottom:
                                "2px solid " + theme.palette.custom.darkMuted,
                        }}
                        wrap="wrap-reverse"
                    >
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "100%",
                                    // border:
                                    //     "1px solid " + theme.palette.custom.lightMuted,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Link href="/publications/letters">
                                    <Typography
                                        variant="h2"
                                        className="link"
                                        sx={{
                                            textAlign: "center",
                                            margin: "2em 0",
                                        }}
                                    >
                                        Letters
                                    </Typography>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Link href="/publications/letters">
                                <Box
                                    sx={{
                                        backgroundImage:
                                            "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/poetryHeader.webp)",
                                        backgroundSize: "cover",
                                        padding: "12rem 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        transition: "300ms",
                                        "&:hover": {
                                            opacity: "60%",
                                        },
                                    }}
                                ></Box>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

// export const getServerSideProps = async (context) => {
//     const publicationsRef = collection(db, "publications");

//     const miscQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "misc"),
//         orderBy("dateUploaded", "desc"),
//         limit(1)
//     );
//     const outandaboutQuery = query(
//         collection(db, "outandabout"),
//         orderBy("dateUploaded", "desc"),
//         limit(2)
//     );
//     const adviceQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "advice"),

//         orderBy("dateUploaded", "desc"),
//         limit(5)
//     );
//     const bestofQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "bestof"),

//         orderBy("dateUploaded", "desc"),
//         limit(4)
//     );
//     const opinionsQuery = query(
//         publicationsRef,
//         where("categories", "array-contains", "opinions"),

//         orderBy("dateUploaded", "desc"),
//         limit(2)
//     );

//     const miscSnapshot = await getDocs(miscQuery);
//     const outandaboutSnapshot = await getDocs(outandaboutQuery);
//     const adviceSnapshot = await getDocs(adviceQuery);
//     const bestofSnapshot = await getDocs(bestofQuery);
//     const opinionsSnapshot = await getDocs(opinionsQuery);
//     let misc = [];
//     miscSnapshot.docs.forEach((doc, index) => {
//         misc = [...misc, doc.data()];
//     });
//     let outandabout = [];
//     outandaboutSnapshot.docs.forEach((doc, index) => {
//         outandabout = [...outandabout, doc.data()];
//     });
//     let advice = [];
//     adviceSnapshot.docs.forEach((doc, index) => {
//         advice = [...advice, doc.data()];
//     });
//     let bestof = [];
//     bestofSnapshot.docs.forEach((doc, index) => {
//         bestof = [...bestof, doc.data()];
//     });
//     let opinions = [];
//     opinionsSnapshot.docs.forEach((doc, index) => {
//         opinions = [...opinions, doc.data()];
//     });

//     return {
//         props: {
//             misc,
//             outandabout,
//             advice,
//             bestof,
//             opinions,
//         },
//     };
// };

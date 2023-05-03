import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import Meta from "../components/home/Meta";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Box
                sx={{
                    backgroundImage:
                        "linear-gradient(rgba(39, 45, 45, 0.65), rgba(39, 45, 45, 1)), url(/images/collage-background.webp)",
                    // "linear-gradient(rgba(233, 214, 214, 0.8), rgba(233, 224, 214, 0.8)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    // backgroundAttachment: "fixed",
                    padding: "8rem 2rem 8rem 2rem",
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "column",
                }}
            ></Box>
            <Box sx={{ padding: "2rem 0" }}></Box>

            <Grid container spacing={0}>
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
                        <Typography variant="h2" sx={{ textAlign: "center" }}>
                            Poetry
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/visualArtsHeader.png)",
                            backgroundSize: "cover",
                            backgroundPosition: { xs: "0% 0%", md: "40% 0%" },
                            padding: "10rem 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ></Box>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/visArts.webp)",
                            backgroundSize: "cover",
                            backgroundPosition: { xs: "0% 0%", md: "0% 20%" },
                            padding: "10rem 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ></Box>
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
                        <Typography variant="h2" sx={{ textAlign: "center" }}>
                            Mixed Media
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
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
                        <Typography variant="h2" sx={{ textAlign: "center" }}>
                            Letters
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/poetryHeader.webp)",
                            backgroundSize: "cover",
                            backgroundPosition: { xs: "0% 0%", md: "40% 0%" },
                            padding: "10rem 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    ></Box>
                </Grid>
            </Grid>
        </Container>
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

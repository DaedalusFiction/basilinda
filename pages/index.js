import { Box, Button, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase";
import Meta from "../components/home/Meta";
import Link from "next/link";
import AdvicePreview from "../components/previews/AdvicePreview";
import BestofPreview from "../components/previews/BestofPreview";
import OpinionPreview from "../components/previews/OpinionPreview";
import theme from "../styles/themes/theme";
import MiscPreview from "../components/previews/MiscPreview";
import SidebarInfo from "../components/layout/SidebarInfo";
import OutandAboutPreview from "../components/previews/OutandAboutPreview";
import SizedImage from "../components/general/SizedImage";
import { hero } from "../siteInfo";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Box
                sx={{
                    height: "100%",
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(/images/collage-background.webp)",
                    backgroundSize: "cover",
                    backgroundPosition: { xs: "0% 0%", md: "40% 0%" },
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Box>
                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: "center",
                            color: theme.palette.custom.dark,
                        }}
                    >
                        Basilinda
                    </Typography>
                    <Box
                        sx={{
                            transform: "scaleY(1)",
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            marginBottom: ".5rem",
                        }}
                    >
                        <SizedImage
                            image={hero.imageTwo}
                            height={50}
                            width={125}
                        />
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            color: theme.palette.custom.dark,
                        }}
                    >
                        Coming Soon
                    </Typography>
                </Box>
            </Box>
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

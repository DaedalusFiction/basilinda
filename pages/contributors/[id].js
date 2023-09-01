import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import { db } from "../../firebase";
import NativeImage from "../../components/general/NativeImage";

const page = ({ contributor }) => {
    return (
        <PageLayout name={contributor.name}>
            <Container maxWidth="md" className="section">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <Box className="flex flex-center flex-middle">
                            <NativeImage
                                src={contributor.URLs[0]}
                                alt={contributor.name}
                                maxSize={800}
                            />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box className="flex flex-center flex-middle">
                            <Typography>{contributor.bio}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `contributors/${context.params.id}`));
    let contributor = docSnap.data();

    return {
        props: {
            contributor,
        },
    };
};

export default page;

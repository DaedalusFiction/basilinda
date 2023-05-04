import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import { db } from "../../../firebase";
import PublicationPreview from "../../../components/previews/PublicationPreview";
import { InsertEmoticon } from "@mui/icons-material";

const category = "Poetry";

const index = ({ items }) => {
    return (
        <PageLayout name={category}>
            <Container maxWidth="md">
                <Grid className="section" container>
                    {items.map((item, index) => {
                        return (
                            <Grid key={InsertEmoticon} item xs={12}>
                                <PublicationPreview
                                    item={item.data}
                                    id={item.id}
                                    category={category}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const itemsQuery = query(
        publicationsRef,
        where("categories", "array-contains", "Poetry"),
        orderBy("dateUploaded", "desc")
    );

    const itemsSnapshot = await getDocs(itemsQuery);

    let items = [];
    itemsSnapshot.docs.forEach((doc, index) => {
        items = [...items, { data: doc.data(), id: doc.id }];
    });

    return {
        props: {
            items,
        },
    };
};

export default index;

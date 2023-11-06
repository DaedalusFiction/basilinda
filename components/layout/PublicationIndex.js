import React, { useEffect, useState } from "react";
import PageLayout from "./PageLayout";
import { Box, Container, Grid } from "@mui/material";
import PublicationPreview from "../previews/PublicationPreview";

const PublicationIndex = ({ category, items, isGrid, image }) => {
    const [columns, setColumns] = useState([[], [], []]);
    useEffect(() => {
        function sortImages() {
            let newColumns = [[], [], []];
            items.forEach((image, index) => {
                newColumns[index % 3].push(image);
            });
            setColumns(newColumns);
        }
        sortImages();
    }, [items]);

    return (
        <PageLayout name={category}>
            <Container
                maxWidth={isGrid ? "xl" : "md"}
                sx={{ minHeight: "70vh" }}
            >
                {!image && (
                    <Grid className="section" container>
                        {items.map((item, index) => {
                            return (
                                <Grid key={index} item xs={isGrid ? 4 : 12}>
                                    <PublicationPreview
                                        image={image}
                                        item={item.data}
                                        id={item.id}
                                        category={category}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
                {image && (
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <Grid container spacing={2}>
                            {columns &&
                                columns.length > 0 &&
                                columns.map((column, index) => {
                                    return (
                                        <Grid
                                            item
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            key={index}
                                        >
                                            {column.map((item, index) => {
                                                return (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            margin: "1rem 0",
                                                        }}
                                                    >
                                                        <PublicationPreview
                                                            image={image}
                                                            item={item.data}
                                                            id={item.id}
                                                            category={category}
                                                        />
                                                    </Box>
                                                );
                                            })}
                                        </Grid>
                                    );
                                })}
                        </Grid>
                    </Box>
                )}
                {image && (
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            marginTop: "2rem",
                        }}
                    >
                        <Grid container spacing={4}>
                            {items.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={12}>
                                        <PublicationPreview
                                            image={image}
                                            item={item.data}
                                            id={item.id}
                                            category={category}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                )}
            </Container>
        </PageLayout>
    );
};

export default PublicationIndex;

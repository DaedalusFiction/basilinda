import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <Box sx={{ position: "relative" }}>
            <Navbar />
            {/* <Header /> */}
            {children}
            <Footer />
        </Box>
    );
};

export default Layout;

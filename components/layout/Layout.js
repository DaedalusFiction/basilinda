import { Box } from "@mui/system";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

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

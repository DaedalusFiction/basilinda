import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import { pages, header, siteName } from "../../siteInfo";
import theme from "../../styles/themes/theme";

const Header = ({ light }) => {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    justifyContent: "space-between",
                    padding: ".5em 0",
                    display: { xs: "none", lg: "flex" },
                }}
            >
                <Box
                    sx={{
                        display: { xs: "none", lg: "flex" },
                        alignItems: "center",
                        gap: "1.5em",
                    }}
                >
                    <Typography
                        variant="h4"
                        component="p"
                        sx={{
                            color: light
                                ? theme.palette.custom.light
                                : theme.palette.custom.dark,
                        }}
                    >
                        <Link href="/">{siteName}</Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Header;

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider, Fade, Grid, Slide } from "@mui/material";
import Link from "next/link";
import theme from "../../styles/themes/theme";
import { useEffect, useState } from "react";
import { navigateToTop } from "../../utility/navigateToTop";
import { leftPages, navbar, rightPages } from "../../siteInfo";
import { useRouter } from "next/router";
import NavBarLinkAnimation from "../general/NavBarLinkAnimation";
import TextJustify from "../general/TextJustify";

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const [titleFontSize, setTitleFontSize] = useState("2.75rem");
    const router = useRouter();
    const path = router.pathname.split("/");
    const [logoColorPrimary, setLogoColorPrimary] = useState("#ff5a5f");
    const [logoColorSecondary, setLogoColorSecondary] = useState("#b7FFD8");
    const [backgroundColor, setBackgroundColor] = useState("transparent");

    const [trigger, setTrigger] = useState(true);

    useEffect(() => {
        const threshold = 30;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setTrigger(scrollY > lastScrollY ? false : true);

            setBackgroundColor(
                scrollY < lastScrollY
                    ? "transparent"
                    : theme.palette.custom.dark
            );
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [trigger]);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    const handleMouseEnter = () => {
        setExpanded(false);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
    };

    const invertLogoColors = () => {
        setLogoColorPrimary("#b7FFD8");
        setLogoColorSecondary("#ff5a5f");
    };
    const restoreLogoColors = () => {
        setLogoColorPrimary("#ff5a5f");
        setLogoColorSecondary("#b7FFD8");
    };

    return (
        <Slide
            direction="down"
            in={true}
            sx={{
                position: "fixed",
                top: "0",
                zIndex: "100",
                display: { xs: "inherit", lg: "flex" },
            }}
        >
            <AppBar
                position="static"
                onMouseLeave={handleMouseLeave}
                style={{ background: backgroundColor, transition: "600ms" }}
            >
                <Container sx={{ padding: ".5rem 0" }} maxWidth="xl">
                    <Grid container>
                        <Grid item xs={3}>
                            <Box
                                sx={{
                                    display: { xs: "flex", lg: "none" },
                                    height: "100%",
                                    alignItems: "center",
                                }}
                            >
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: "block", lg: "none" },
                                    }}
                                >
                                    {leftPages.map((page, index) => {
                                        return (
                                            <MenuItem
                                                onClick={() => {
                                                    navigateToTop();
                                                    handleCloseNavMenu();
                                                }}
                                                key={index}
                                            >
                                                <Typography textAlign="center">
                                                    <Link href={page.href}>
                                                        {page.name}
                                                    </Link>
                                                </Typography>
                                            </MenuItem>
                                        );
                                    })}
                                    {rightPages.map((page, index) => {
                                        return (
                                            <MenuItem
                                                onClick={() => {
                                                    navigateToTop();
                                                    handleCloseNavMenu();
                                                }}
                                                key={index}
                                            >
                                                <Typography textAlign="center">
                                                    <Link href={page.href}>
                                                        {page.name}
                                                    </Link>
                                                </Typography>
                                            </MenuItem>
                                        );
                                    })}
                                </Menu>
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Box
                                sx={{
                                    display: { xs: "flex", lg: "none" },
                                    alignItems: "center",
                                    justifyContent: "end",
                                    paddingRight: "1em",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    noWrap
                                    onClick={() => {
                                        navigateToTop();
                                    }}
                                    sx={{
                                        fontSize: "1.75rem",
                                        fontWeight: 700,
                                        color: theme.palette.custom.light,
                                    }}
                                >
                                    <Link href="/">
                                        <Typography
                                            variant="h1"
                                            onMouseEnter={() => {
                                                invertLogoColors();
                                            }}
                                            onMouseLeave={() => {
                                                restoreLogoColors();
                                            }}
                                            sx={{
                                                margin: "0",
                                                transition: "150ms",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                textTransform: "uppercase",
                                                fontSize: "2rem",
                                                color: theme.palette.primary
                                                    .main,
                                            }}
                                        >
                                            BASILINDA
                                        </Typography>
                                    </Link>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* desktop view */}
                    <Box sx={{ display: { xs: "none", lg: "inherit" } }}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "end",
                                        width: "100%",
                                        height: "100%",
                                        gap: "1.5em",
                                    }}
                                >
                                    {leftPages.map((page, index) => (
                                        <NavBarLinkAnimation key={index}>
                                            <Typography>{page.name}</Typography>
                                            <Link href={page.href}>
                                                <Typography>
                                                    {page.nameAlt}
                                                </Typography>
                                            </Link>
                                        </NavBarLinkAnimation>
                                    ))}
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "100%",
                                        gap: ".5rem",
                                    }}
                                >
                                    {/* <Box sx={{ height: "100%" }}>
                                        <NativeImage
                                            image={navbar.image}
                                            maxSize={85}
                                        />
                                    </Box> */}
                                    <Box>
                                        <Link href="/">
                                            <Typography
                                                // className="nav-link"
                                                variant="h1"
                                                onClick={() => {
                                                    navigateToTop();
                                                }}
                                                sx={{
                                                    margin: "0",
                                                    transition: "300ms",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                    letterSpacing: ".1em",
                                                    color: theme.palette.primary
                                                        .main,
                                                    "&:hover": {
                                                        color: theme.palette
                                                            .secondary.main,
                                                    },
                                                }}
                                            >
                                                BASILINDA
                                            </Typography>
                                        </Link>
                                        <TextJustify>
                                            A Queer & Feminist Journal
                                        </TextJustify>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "100%",
                                        gap: "1.5em",
                                    }}
                                >
                                    {rightPages.map((page, index) => (
                                        <NavBarLinkAnimation key={index}>
                                            <Typography>{page.name}</Typography>
                                            <Link href={page.href}>
                                                <Typography>
                                                    {page.nameAlt}
                                                </Typography>
                                            </Link>
                                        </NavBarLinkAnimation>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                        {expanded && (
                            <Box sx={{ padding: ".5rem 0" }}>
                                <Divider />
                                <Fade in={expanded}>
                                    <Grid container>
                                        <Grid item xs></Grid>
                                        <Grid item xs={6}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    gap: "1em",
                                                    width: "100%",
                                                }}
                                            >
                                                {pages.map((page, index) => {
                                                    return (
                                                        <Box key={index}>
                                                            {page.subPages
                                                                .length > 0 &&
                                                                page.subPages.map(
                                                                    (
                                                                        subPage,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <Typography
                                                                                key={
                                                                                    index
                                                                                }
                                                                                sx={{
                                                                                    textTransform:
                                                                                        "capitalize",
                                                                                    margin: ".5em 0",
                                                                                    transition:
                                                                                        "150ms",
                                                                                    color: theme
                                                                                        .palette
                                                                                        .custom
                                                                                        .lightMuted,
                                                                                    "&:hover":
                                                                                        {
                                                                                            color: theme
                                                                                                .palette
                                                                                                .custom
                                                                                                .light,
                                                                                        },
                                                                                }}
                                                                            >
                                                                                <Link
                                                                                    href={
                                                                                        subPage.href
                                                                                    }
                                                                                >
                                                                                    {
                                                                                        subPage.name
                                                                                    }
                                                                                </Link>
                                                                            </Typography>
                                                                        );
                                                                    }
                                                                )}
                                                        </Box>
                                                    );
                                                })}
                                            </Box>
                                        </Grid>

                                        <Grid item xs></Grid>
                                    </Grid>
                                </Fade>
                            </Box>
                        )}
                    </Box>
                </Container>
            </AppBar>
        </Slide>
    );
};
export default Navbar;

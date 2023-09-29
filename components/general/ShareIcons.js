import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Stack } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const ShareIcons = ({ fontSize, color, direction }) => {
    const handleShare = (e) => {
        e.preventDefault();

        const ahref = window.location.href;
        const encodedAhref = encodeURIComponent(ahref);
        let link;
        switch (e.currentTarget.id) {
            case "share-facebook":
                link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
                open(link);
                break;
            case "share-twitter":
                link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
                open(link);
                break;
            case "share-reddit":
                link = `https://www.reddit.com/submit?url=${encodedAhref}`;
                open(link);
                break;
            default:
                break;
        }
    };

    const open = (socialLink) => {
        window.open(socialLink, "_blank");
    };

    return (
        <>
            {/* <Head>
                <meta property="og:description" content="Your description" />
            </Head> */}
            <Paper
                sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    paddingTop: "1rem",

                    paddingBottom: ".75rem",
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Stack direction={direction} spacing={1}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: ".75rem",
                            color: theme.palette.custom.darkMuted,
                        }}
                    >
                        SHARE
                    </Typography>

                    <Link href="https://www.instagram.com/basilindajournal">
                        <Tooltip title="instagram" placement="left">
                            <IconButton
                                aria-label="instagram"
                                id="share-instagram"
                                onClick={handleShare}
                            >
                                <InstagramIcon
                                    sx={{
                                        fontSize: fontSize,
                                        color: color,
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link href="https://www.facebook.com/basilindajournal">
                        <Tooltip title="facebook" placement="left">
                            <IconButton
                                aria-label="facebook"
                                id="share-facebook"
                                onClick={handleShare}
                            >
                                <FacebookIcon
                                    sx={{ fontSize: fontSize, color: color }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Link href="https://twitter.com/basilindamag">
                        <Tooltip title="twitter" placement="left">
                            <IconButton
                                aria-label="twitter"
                                id="share-twitter"
                                onClick={handleShare}
                            >
                                <TwitterIcon
                                    sx={{ fontSize: fontSize, color: color }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </Stack>
            </Paper>
        </>
    );
};

export default ShareIcons;

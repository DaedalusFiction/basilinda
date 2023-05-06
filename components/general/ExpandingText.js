import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import theme from "../../styles/themes/theme";

const ExpandingText = ({ children }) => {
    const [letterSpacing, setLetterSpacing] = useState(false);
    const [background, setBackground] = useState("inherit");
    const [color, setColor] = useState("inherit");
    const [border, setBorder] = useState(
        "1px solid " + theme.palette.primary.main
    );
    const handleOnMouseOver = () => {
        setLetterSpacing(".3em");
        setBackground(theme.palette.secondary.main);
        setColor(theme.palette.custom.light);
        setBorder("1px solid " + theme.palette.secondary.main);
        // setShadow("5px 5px 5px rgba(0, 0, 0, 0.25)");
    };
    const handleOnMouseLeave = () => {
        setLetterSpacing("inherit");
        setBackground("transparent");
        setColor("inherit");
        setBorder("1px solid " + theme.palette.primary.main);
        // setShadow("none");
    };
    return (
        <Box
            sx={{
                "& > *": {
                    letterSpacing: letterSpacing,
                    transition: "300ms",
                    background: background,
                    display: "inline-block",
                    position: "relative",
                    zIndex: "10",
                    color: color,
                    padding: ".5em 1em",
                    border: border,
                    cursor: "pointer",
                    // fontWeight: "600",
                    textTransform: "uppercase",
                    // boxShadow: shadow,
                },
            }}
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
        >
            {children}
        </Box>
    );
};

export default ExpandingText;

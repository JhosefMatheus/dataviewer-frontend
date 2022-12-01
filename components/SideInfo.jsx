import { Box, Typography } from "@mui/material";

export default function SideInfo({ numberInfo, legend, numberColor }) {
    return (
        <Box
            sx={{
                my: 2
            }}
        >
            <Typography
                sx={{
                    fontSize: "2rem",
                    color: numberColor
                }}
            >
                {numberInfo}
            </Typography>
            <Typography
                sx={{
                    fontSize: "0.875rem",
                    color: "#c0c0c0"
                }}
            >
                {legend}
            </Typography>
        </Box>
    );
}
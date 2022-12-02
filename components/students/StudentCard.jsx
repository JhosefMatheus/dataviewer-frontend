import {
    Typography,
    Box
} from "@mui/material";

export default function StudentCard({ children, studentName }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#ddd",
                    marginLeft: 2
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "700"
                    }}
                >
                    {studentName.split(" ")[0][0].toUpperCase()}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: "700"
                    }}
                >
                    {studentName.split(" ")[studentName.split(" ").length - 1][0].toUpperCase()}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start"
                }}
            >
                <Typography
                    sx={{
                        color: "#373737",
                        fontWeight: "600"
                    }}
                >
                    {studentName}
                </Typography>
                {children}
            </Box>
        </Box>
    );
}
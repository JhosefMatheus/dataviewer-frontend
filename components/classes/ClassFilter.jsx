import {
    FormGroup,
    Typography,
    Box,
    FormControlLabel,
    Checkbox
} from "@mui/material";

export default function ClassFilter({ semesters }) {
    return (
        <Box>
            <Typography
                sx={{
                    color: "#373737",
                    fontSize: "18px",
                    fontWeight: 600
                }}
            >
                Filtrar por
            </Typography>
            <Typography
                sx={{
                    color: "#373737",
                    fontSize: "16px",
                    fontWeight: 600
                }}
            >
                Semestre
            </Typography>
            <Box
                sx={{
                    height: "300px",
                    overflow: "auto"
                }}
            >
                <FormGroup>
                    {
                        semesters && semesters.map(semester => (
                            <FormControlLabel control={<Checkbox />} label={semester} />
                        ))
                    }
                </FormGroup>
            </Box>
        </Box>
    );
}
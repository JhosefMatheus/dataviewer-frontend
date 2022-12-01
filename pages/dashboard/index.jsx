import {
    Typography,
    Grid,
    Box
} from "@mui/material";
import DashboardPerformanceChart from "../../components/dashboard/DashboardPerformanceChart.jsx";
import DashboardTimeManagementChart from "../../components/dashboard/DashboardTimeManagementChart.jsx";
import DashboardTrackingChart from "../../components/dashboard/DashboardTrackingChart.jsx";

export default function Home() {
    return (
        <Box
            flexGrow={1}
            sx={{
                m: 1
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={8}>
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <DashboardPerformanceChart />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <DashboardTrackingChart />
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <DashboardTimeManagementChart />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Typography>
                            Gráfico de ranking geral
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
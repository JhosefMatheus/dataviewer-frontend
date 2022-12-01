import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import nextConfig from "../../next.config";

export default function DashboardTimeManagementChart() {
    const [ timeManagementData, setTimeManagementData ] = useState(null);

    const Chart = dynamic(() => import("../charts/TimeManagement.jsx"), { ssr: false });

    useEffect(() => {
        async function getTimeManagementData() {
            const token = localStorage.getItem("token");

            const response = await fetch(`${nextConfig.urlApi}/dashboard/timeManagementChartData`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            setTimeManagementData(responseData.data);
        }

        getTimeManagementData();
    }, []);

    return (
        <Box
            sx={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Typography
                sx={{
                    color: "#373737",
                    fontSize: "1rem",
                    fontWeight: "700"
                }}
            >
                Gestão de Tempo
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "stretch",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center"
                    }}
                >
                    <Box>
                        <Typography></Typography>
                    </Box>
                </Box>
                <Box>
                    <Chart width={600} data={timeManagementData} />
                </Box>
            </Box>
        </Box>
    );
}
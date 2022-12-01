import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import nextConfig from "../../next.config.js";

export default function DashboardTrackingChart() {
    const [ trackingData, setTrackingData ] = useState(null);

    const Chart = dynamic(() => import("../charts/TrackingChart.jsx"), { ssr: false });

    useEffect(() => {
        async function getTrackingData() {
            const token = localStorage.getItem("token");

            const response = await fetch(`${nextConfig.urlApi}/dashboard/trackingChartData`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            setTrackingData(responseData.data);
        }

        getTrackingData();
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
                Acompanhamento
            </Typography>
            <Chart width={300} data={trackingData} />
        </Box>
    )
}
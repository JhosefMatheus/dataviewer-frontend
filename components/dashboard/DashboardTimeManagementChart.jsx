import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import nextConfig from "../../next.config";
import SideInfo from "../SideInfo";

export default function DashboardTimeManagementChart() {
    const [ timeManagementData, setTimeManagementData ] = useState(null);

    const [ submissionsNumber, setSubmissionsNumber ] = useState(0);
    const [ accessesAmount, setAccessesAmount ] = useState(0);

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

        async function getSubmissionsNumber() {
            const token = localStorage.getItem("token");

            const response = await fetch(`${nextConfig.urlApi}/dashboard/submissionsNumberData`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            setSubmissionsNumber(responseData.data);
        }

        async function getAccessesAmount() {
            const token = localStorage.getItem("token");

            const response = await fetch(`${nextConfig.urlApi}/dashboard/accessesAmountData`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            setAccessesAmount(responseData.data);
        }

        getTimeManagementData();
        getSubmissionsNumber();
        getAccessesAmount();
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
                        width: "25%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        m: 3
                    }}
                >
                    <SideInfo numberInfo={submissionsNumber} legend="Número de submissões" numberColor="#4163BF" />
                    <SideInfo numberInfo={accessesAmount} legend="Quantidade de acessos" numberColor="#9DB4F5" />
                </Box>
                <Box
                    sx={{
                        width: "75%"
                    }}
                >
                    <Chart width={600} data={timeManagementData} />
                </Box>
            </Box>
        </Box>
    );
}
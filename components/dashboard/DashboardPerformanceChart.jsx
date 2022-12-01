import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button
} from "@mui/material";
import nextConfig from "../../next.config";
import dynamic from "next/dynamic.js";

export default function DashboardPerformanceChart() {
    const [ performanceData, setPerformanceData ] = useState(null);
    const [ subject, setSubject ] = useState("dificuldade");

    const [ assiduousStudents, setAssiduousStudents ] = useState(0);
    const [ missingStudents, setMissingStudents ] = useState(0);

    useEffect(() => {
        async function getAssiduousStudents() {
            const token = localStorage.getItem("token");

            const response = await fetch(`${nextConfig.urlApi}/dashboard/assiduousStudentsData`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await response.json();

            setAssiduousStudents(responseData.data);
        }

        async function getMissingStudents() {
            const token = localStorage.getItem("token");

            const repsonse = await fetch(`${nextConfig.urlApi}/dashboard/missingStudentsData`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await repsonse.json()

            setMissingStudents(responseData.data);
        }

        getAssiduousStudents();
        getMissingStudents();
    }, []);

    useEffect(() => {
        async function getChartData() {
            const token = localStorage.getItem("token");

            const bodyReq = {
                subject: subject
            }

            const response = await fetch(`${nextConfig.urlApi}/dashboard/performanceChartData`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(bodyReq)
            });

            const responseData = await response.json()

            setPerformanceData(responseData.data);
        }

        getChartData();
    }, [subject]);

    const Chart = dynamic(() => import("../charts/PerformanceChart.jsx"), { ssr: false });

    return (
        <Box
            sx={{
                backgroundColor: "#fff",
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
                Desempenho
            </Typography>
            <Box>
                <Button
                    sx={{
                        borderRadius: 0,
                        borderBottom: subject === "dificuldade" ? "2px solid #248DF4" : "2px solid transparent",
                        color: subject === "dificuldade" ? "#373737" : "#c0c0c0",
                        fontWeight: 500
                    }}
                    onClick={() => setSubject("dificuldade")}
                >
                    Dificuldade
                </Button>
                <Button
                    sx={{
                        borderRadius: 0,
                        borderBottom: subject === "assunto" ? "2px solid #248DF4" : "2px solid transparent",
                        color: subject === "assunto" ? "#373737" : "#c0c0c0",
                        fontWeight: 500
                    }}
                    onClick={() => setSubject("assunto")}
                >
                    Assunto
                </Button>
                <Button
                    sx={{
                        borderRadius: 0,
                        borderBottom: subject === "lista" ? "2px solid #248DF4" : "2px solid transparent",
                        color: subject === "lista" ? "#373737" : "#c0c0c0",
                        fontWeight: 500
                    }}
                    onClick={() => setSubject("lista")}
                >
                    Lista
                </Button>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "stretch",
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        width: "25%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        m: 3
                    }}
                >
                    <Box
                        sx={{
                            my: 2
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#4163BF"
                            }}
                        >
                            {assiduousStudents}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "0.875rem",
                                color: "#c0c0c0"
                            }}
                        >
                            Alunos assíduos
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            my: 2
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "2rem",
                                color: "#9DB4F5"
                            }}
                        >
                            {missingStudents}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "0.875rem",
                                color: "#c0c0c0"
                            }}
                        >
                            Número de alunos faltantes
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "75%",
                        height: "100%"
                    }}
                >
                    <Chart data={performanceData} width={600} />
                </Box>
            </Box>
        </Box>
    );
}
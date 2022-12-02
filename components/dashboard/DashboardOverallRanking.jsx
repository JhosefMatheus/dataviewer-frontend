import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import nextConfig from "../../next.config";
import StudentCard from "../students/StudentCard";

export default function DashboardOverallRanking() {
    const [ studentsOverallRanking, setStudentsOverallRanking ] = useState(null);

    useEffect(() => {
        async function getStudentsOverallRanking() {
            const token = localStorage.getItem("token");

            const response = await fetch(`${nextConfig.urlApi}/students/overallRanking`, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            const responseData = await response.json()

            setStudentsOverallRanking(responseData.data);
        }

        getStudentsOverallRanking();
    }, []);

    useEffect(() => {
        console.log(studentsOverallRanking);
    }, [studentsOverallRanking]);
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "auto"
            }}
        >
            <Typography
                sx={{
                    color: "#373737",
                    fontSize: "1rem",
                    fontWeight: "700",
                }}
            >
                Ranking Geral
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography
                    sx={{
                        color: "#C0C0C0",
                        m: 2
                    }}
                >
                    Alunos
                </Typography>
                <Typography
                    sx={{
                        color: "#C0C0C0",
                        m: 2
                    }}
                >
                    Pontos
                </Typography>
            </Box>
            {
                studentsOverallRanking && (
                    studentsOverallRanking.map(student => (
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >
                            <StudentCard studentName={student.name}>
                                <Typography
                                    sx={{
                                        color: "#547FF7",
                                        fontSize: "10px",
                                        fontWeight: "700"
                                    }}
                                >
                                    ID {student.id}
                                </Typography>
                            </StudentCard>
                            <Typography
                                sx={{
                                    color: "#547FF7",
                                    m: 2
                                }}
                            >
                                {student.points}
                            </Typography>
                        </Box>
                    ))
                )
            }
        </Box>
    );
}
import { useState, useEffect } from 'react'
import ClassCard from '../../components/classes/ClassCard'
import {
  Box,
  Grid
} from '@mui/material';
import ClassFilter from '../../components/classes/ClassFilter'
import ClassOrder from '../../components/classes/ClassOrder'
import nextConfig from '../../next.config'

export default function Classes() {
  const [ classes, setClasses ] = useState([]);
  const [ semesters, setSemesters ] = useState([]);

  useEffect(() => {
    async function getClasses() {
      const token = localStorage.getItem("token");

      const response = await fetch(`${nextConfig.urlApi}/classes`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      const { data } = await response.json();

      setClasses(data);

      const semestersTemp = [];

      data.forEach(e => {
        !semestersTemp.includes(`${e.year}.${e.semester}`) && semestersTemp.push(`${e.year}.${e.semester}`);
      });

      setSemesters(semestersTemp);
    }

    getClasses();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        backgroundColor: "#fff",
        m: 2,
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "25px"
      }}
    >
      <Box
        sx={{
          width: "15%",
          height: "100%"
        }}
      >
        <ClassFilter semesters={semesters} />
        <ClassOrder semesters={semesters} />
      </Box>
      <Box
        sx={{
          width: "85%",
          height: "600px",
          overflow: "auto",
          p: 1
        }}
      >
        <Grid
          container
          spacing={1}
        >
          {
            classes.map(classe => (
              <ClassCard classe={classe} />
            ))
          }
        </Grid>
      </Box>
    </Box>
  )
}
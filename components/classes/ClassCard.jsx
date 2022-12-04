import {
  Box,
  Grid,
  Typography
} from "@mui/material";
import { useRouter } from 'next/router';

export default function ClassCard({ classe }) {
  const router = useRouter();

  return (
    <Grid
      item
      xs={4}
      sx={{
        border: "2px solid transparent",
        borderRadius: "8px",
        cursor: "pointer",
        "&:hover": {
          border: "2px solid #527df3",
          textDecoration: "underline"
        }
      }}
      onClick={() => router.push(`classes/${classe.id_class}`)}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "#124375",
          fontWeight: 600
        }}
      >
        {classe.name}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#9db4f5"
        }}
      >
        Code: {classe.id_class}
      </Typography>
      <Box
        marginLeft="15px"
      >
        <Typography
          sx={{
            fontSize: "16px",
            color: "#373737"
          }}
        >
          Semestre: {`${classe.year}.${classe.semester}`}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#373737"
          }}
        >
          Professores: 2
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#373737"
          }}
        >
          Ano: {classe.year}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            color: "#373737"
          }}
        >
          Alunos: 56
        </Typography>
      </Box>
    </Grid>
    // <Box className={styles.card}>
    //   <Typography
    //     className={styles.title}
    //   >
    //     {props.title}
    //   </Typography>
    //   <Box className={styles.content}>
    //     <Typography> Ano: {props.year} </Typography>
    //     <Typography> Semestre: {props.semester} </Typography>
    //   </Box>
    // </Box>
  )
}

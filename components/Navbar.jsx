import styles from '../styles/Home.module.css'
import { useAuth } from '../context/AuthContext'
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { logout } = useAuth()
  const router = useRouter();

  function handleAnchorLogoutClick() {
    logout();
  }

  return (
    <Box>
      <List className={styles.ul}>
        <ListItem
          className={styles.li}
          disablePadding
        >
          <ListItemButton
           component="a"
           href="/dashboard"
           sx={{
            backgroundColor: router.pathname.includes("/dashboard") && "#248df4"
           }}
          >
            <ListItemText
             primary="Dashboard"
             sx={{
              color: router.pathname.includes("/dashboard") && "#fff"
             }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          className={styles.li}
          disablePadding
        >
          <ListItemButton
            component="a"
            href="/classes"
            sx={{
              backgroundColor: router.pathname.includes("/classes") && "#248df4"
            }}
          >
            <ListItemText
              primary="Turmas"
              sx={{
                color: router.pathname.includes("/classes") && "#fff"
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem className={styles.li} disablePadding>
          <ListItemButton component="a" onClick={handleAnchorLogoutClick}>
            <ListItemText primary="Sair" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

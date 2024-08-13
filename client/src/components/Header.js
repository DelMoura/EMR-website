import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';


const themeForUse = createTheme({
  palette: {
    bg: {
      greenMode: '#00743c',
    },
    text: {
      whiteColor: '#ffffff',
    },
    success: {
      main: '#009688',
      dark: '#00796B',
    },
  },
});

export default function Header() {
  return (
    <ThemeProvider theme={themeForUse}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'bg.greenMode' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12em' }}>
              <Typography component="div">
                <Button size="large" sx={{ color: 'text.whiteColor' }}> A RESTINGA </Button>
              </Typography>
              <Typography component="div">
                <Button size="large" sx={{ color: 'text.whiteColor' }}> CONTATO </Button>
              </Typography>
              <Typography component="div">
                <Button size="large" sx={{ color: 'text.whiteColor' }}> PARCEIROS </Button>
              </Typography>
              <Typography component="div">
                <Button size="large" sx={{ color: 'text.whiteColor' }}> LOJA ONLINE </Button>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

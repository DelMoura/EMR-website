import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const themeForUse = createTheme({
    palette: {
        bg: {
            greenMode: '#00743c',
            whitebg: '#ffffff',
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

export default function Campo() {
    return (

        <ThemeProvider theme={themeForUse}>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',

                }}
            >
                <TextField sx={{ backgroundColor: 'bg.whitebg' }} fullWidth label="Nome" id="name" />

                <TextField sx={{ mt: '2em', backgroundColor: 'bg.whitebg' }} fullWidth label="E-mail" id="email" />

                <TextField
                    sx={{
                        mt: '2em',
                        backgroundColor: 'bg.whitebg'
                    }}
                    id="campo-mensagem"
                    fullWidth
                    label="Mensagem"
                    multiline
                    rows={6}
                />

            </Box>
        </ThemeProvider>
    )
}
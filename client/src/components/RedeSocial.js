import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const theme = createTheme({
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

export default function RedeSocial() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    flexGrow: 1,
                    width: '100%',
                    backgroundColor: '#ffe599',
                    display: 'flex',
                    alignItems: 'center',
                    height: '50vh'
                }}
            >
                <Grid
                    container
                    spacing={5}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                >
                    <Grid item xs={2}>
                        <Button>
                            <FaFacebook size={'5em'} />
                            @FACEBOOK
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <RiTwitterXLine size={'5em'} />
                            @TWITTER
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <FaSquareInstagram size={'5em'} />
                            @INSTAGRAM
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            <FaYoutube size={'5em'}/>
                            @YOUTUBE
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

import Box from '@mui/material/Box';
import PaperNoticia from './PaperNoticia';

export default function Noticias() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '32em',
                backgroundColor: '#ff496c',
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: '5em',
                    width: '20em',
                    height: '20em',
                },
            }}
        >

            <PaperNoticia />

        </Box>

    )
}
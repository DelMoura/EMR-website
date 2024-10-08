import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                TITULO NOTICIA
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                FOTO
            </Typography>

            <Typography variant="body2">
                TEXTO!
                <br />
                {'"TEXTO"'}
            </Typography>

        </CardContent>
        <CardActions>
            <Button size="medium">VER MAIS</Button>
        </CardActions>
    </React.Fragment>
);

export default function PaperNoticia() {
    return (
        <Box sx={{ minWidth: '25em' }}>
            <Card sx={{mt: '5em'}} variant="outlined">{card}</Card>
        </Box>
    )
}
import Box from '@mui/material/Box';

export default function Banner(){
    return(
        <Box
        sx={{
          width: '100%',
          height: '32em',
          mt: '20em',
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    );
};
import { Box } from "@mui/material"
import Campo from "./Campo"

export default function Contato() {
    return (
        <Box
            sx={{
                flexGrow: 1,
                width: '100%',
                backgroundColor: '#8fce00',
                display: 'flex',
                alignItems: 'center',
                height: '35em'
            }}

        >

            <Campo />

        </Box>
    )
}
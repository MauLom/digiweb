import * as React from "react"

/// Componentes
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const Home = () => {


    const estiloCaja ={
        backgroundColor:"red"
    }

    return (
        <Box>
            <Stack sx={estiloCaja} direction="Row">
                <div className="">
                    Otro texto
                </div>
            </Stack>
        </Box>

    )

}

export default Home
import * as React from 'react'

/// Material
import { Button, Grid,Stack, Box } from "@mui/material";
const TablaRankings = () => {

    return (
        <Grid container sx={{ width: "100%" }} justifyContent="center">
            <Stack direction="column" justifyContent="center"
                alignItems="center">
                <Stack direction="row">
                    <Button>Rank</Button>
                    <Button>Name</Button>
                    <Button>Vocation</Button>
                    <Button>Level</Button>
                    <Button>Server</Button>
                </Stack>
                <Box sx={{ width: "100%" }}>
                    <img src="https://img2.rtve.es/im/5829788/?w=900" height="50%" width="80%" alt="" />
                </Box>
                
            </Stack>
        </Grid>
    )
}

export default TablaRankings
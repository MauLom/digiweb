import * as React from "react"

/// Componentes
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import Stack from '@mui/material/Stack';
import { Button, Grid } from "@mui/material";
import TablaRankings from "../components/tablaRankings";
import Header from "../components/header";
import SectionBuy from "../components/sectionBuy";
import TextField from "@mui/material/TextField";


const Home = () => {
    const [userName, setUserName] = React.useState('')

    const [costoDeProducto, setCostoDeProducto] = React.useState(15)
    const styles = {
        mainimage: {
            backgroundSize: "cover",
            height: "850px",
            backgroundImage: "url(https://wallpapercave.com/wp/bkiwp42.jpg)",
            width: "100%"

        },
        menubuttons: {
            alignItems: "left",
            justifyContent: "left",


        },
        buttondownload: {
            paddingTop:"20%",
            alignItems: "center",
            justifyContent: "center",
            width: "100%"

        },
        section: {
            width: "80%",
            alignContent: "spaceBetween"
        },
        btngroup: {
            backgroundColor: "black",
            backgroundSize: "cover",

            width: "cover"
        },
        gridcontent: {
            alignContent: "spaceBetween"
        }

    }

    const handlChangeUserName = (event) => {
        setUserName(event.target.value)
    }


    return (
        <Box>
            <Grid sx={styles.mainimage} container>
                <Grid item xs={12} lg={12}><Stack sx={styles.menubuttons} direction="Row">
                    <Header />
                </Stack>
                </Grid>
                <Grid itme xs={12} lg={12}>
                <Stack sx={styles.buttondownload} direction="Row">
                    <Button variant="contained" color="error" size="large">Download</Button>

                </Stack>
                </Grid>

            </Grid>

            <br />
            <Grid container>
                <Grid item xs={12} lg={4}>
                    <p><img src="https://i.pinimg.com/originals/14/6e/fd/146efd0e37739caff3bc9d8c3a74cdcd.jpg" height="224px" width="80%" alt="" /> <br /><br /><center><Skeleton sx={styles.section} animation="wave" /></center><br /><center><Skeleton sx={styles.section} animation="wave" /></center><br /><center><Skeleton sx={styles.section} animation="wave" /></center></p>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <p><img src="https://i.pinimg.com/originals/14/6e/fd/146efd0e37739caff3bc9d8c3a74cdcd.jpg" height="224px" width="80%" alt="" /> <br /><br /><center><Skeleton sx={styles.section} animation="wave" /></center><br /><center><Skeleton sx={styles.section} animation="wave" /></center><br /><center><Skeleton sx={styles.section} animation="wave" /></center></p>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <p><img src="https://i.pinimg.com/originals/14/6e/fd/146efd0e37739caff3bc9d8c3a74cdcd.jpg" height="224px" width="80%" alt="" /> <br /><br /><center><Skeleton sx={styles.section} animation="wave" /></center><br /><center><Skeleton sx={styles.section} animation="wave" /></center><br /><center><Skeleton sx={styles.section} animation="wave" /></center></p>
                </Grid>



            </Grid>
            <Grid>
                <TextField label="Usuario" placeholder="usuario" value={userName} onChange={(e) => { handlChangeUserName(e) }} />
                <Box>el usuario es: {userName}</Box>


                <TextField label="Costo de producto" placeholder="Costo de producto" value={costoDeProducto} onChange={(e) => { setCostoDeProducto(e) }} />
                <Box>Costo mas IVA {Number.parseInt(costoDeProducto) * 1.16}</Box>

                <Grid sx={styles.btngroup} item xs={12} lg={12}>
                    {/* <p> */}
                    {/* <ButtonGroup sx={btng2} variant="contained" color="error" aria-label="outlined primary button group">
                            <Button>Rank</Button>
                            <Button>Name</Button>
                            <Button>Vocation</Button>
                            <Button>Level</Button>
                            <Button>Server</Button>
                        </ButtonGroup><br /> <br /> */}
                    {/* <Grid container sx={{ width: "100%" }} justifyContent="center">
                        <Stack direction="column" justifyContent="center"
                            alignItems="center">
                            <Stack direction="row">
                                <Button>Rank</Button>
                                <Button>Name</Button>
                                <Button>Vocation</Button>
                                <Button>Level</Button>
                                <Button>Server</Button>
                            </Stack>
                            <Box sx={{width:"100%"}}>
                                <img src="https://img2.rtve.es/im/5829788/?w=900" height="50%" width="80%" alt="" />
                            </Box>
                        </Stack>
                    </Grid> */}
                    <TablaRankings />
                    {/* </p> */}
                </Grid>
            </Grid>

            <Box>

                <br />
                <SectionBuy />
                <br />



                <br />


            </Box>

















        </Box>

    )

}

export default Home
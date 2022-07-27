import * as React from "react"

/// Componentes
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

import Stack from '@mui/material/Stack';
import { Button, Grid } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import TablaRankings from "../components/tablaRankings";
import TextField from "@mui/material/TextField";


const Home = () => {
    const [userName, setUserName] = React.useState('')

    const [costoDeProducto, setCostoDeProducto] = React.useState(15)
    const styles = {
        estiloCaja: {
            backgroundColor: "black",
            width: "absolute",
            height: "50px"

        }
    }

    const handlChangeUserName = (event) => {
        setUserName(event.target.value)
    }




    const imgprincipal = {
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "18%",
        height: "500px",
        backgroundImage: "url(https://wallpapercave.com/wp/bkiwp42.jpg)",

        width: "absolute"
    }
    const seccion = {
        width: "80%",
        alignContent: "spaceBetween"


    }
    const btngroup = {
        backgroundColor: "black",
        backgroundSize: "absolute",
        justifyContent: "center",
        width: "absolute"
    }
    const btng2 = {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
    const i1 = {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "18%",
        height: "70%",
        width: "70%",
        backgroundImage: "url(https://png.pngtree.com/png-clipart/20201209/original/pngtree-christmas-unboxing-day-png-image_5680724.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50%"


    }
    const i2 = {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "18%",
        height: "80%",
        width: "80%",
        backgroundImage: "url(https://elvortex.com/wp-content/uploads/2020/06/Digimon-Adventure-Regresa-FT.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50%"


    }
    const i3 = {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "18%",
        height: "80%",
        width: "80%",
        backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qXDhYwZl_0h31lfOqoitJrSbZEkUzCQukA&usqp=CAU)",
        backgroundSize: "cover",
        backgroundPosition: "50%"


    }
    const gridcon = {
        alignContent: "spaceBetween"

    }


    return (
        <Box>


            <Stack sx={styles.estiloCaja} direction="Row">
                <div className="" >
                </div >

            </Stack>


            <Stack sx={imgprincipal} direction="Row">
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" color="error" size="large">Download</Button>

                </div>

            </Stack>
            <br />
            <Grid container>
                <Grid item xs={12} lg={4}>
                    <p><img src="https://i.pinimg.com/originals/14/6e/fd/146efd0e37739caff3bc9d8c3a74cdcd.jpg" height="224px" width="80%" alt="" /> <br /><br /><center><Skeleton sx={seccion} animation="wave" /></center><br /><center><Skeleton sx={seccion} animation="wave" /></center><br /><center><Skeleton sx={seccion} animation="wave" /></center></p>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <p><img src="https://i.pinimg.com/originals/14/6e/fd/146efd0e37739caff3bc9d8c3a74cdcd.jpg" height="224px" width="80%" alt="" /> <br /><br /><center><Skeleton sx={seccion} animation="wave" /></center><br /><center><Skeleton sx={seccion} animation="wave" /></center><br /><center><Skeleton sx={seccion} animation="wave" /></center></p>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <p><img src="https://i.pinimg.com/originals/14/6e/fd/146efd0e37739caff3bc9d8c3a74cdcd.jpg" height="224px" width="80%" alt="" /> <br /><br /><center><Skeleton sx={seccion} animation="wave" /></center><br /><center><Skeleton sx={seccion} animation="wave" /></center><br /><center><Skeleton sx={seccion} animation="wave" /></center></p>
                </Grid>



            </Grid>
            <Grid>
                <TextField label="Usuario" placeholder="usuario" value={userName} onChange={(e) => {handlChangeUserName(e)}} />
                <Box>el usuario es: {userName}</Box>


                <TextField  label="Costo de producto" placeholder="Costo de producto" value={costoDeProducto} onChange={(e) => {setCostoDeProducto(e)}} />
                <Box>Costo mas IVA {Number.parseInt(costoDeProducto) * 1.16}</Box>
                
                <Grid sx={btngroup} item xs={12} lg={12}>
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
                <Grid sx={gridcon} container>
                    <p></p>
                    <Grid sx={i1} item xs={12} lg={4}><Button variant="contained" color="error" size="large">Download</Button><br /><br /></Grid>
                    <Grid sx={i2} item xs={12} lg={4}><Button variant="contained" color="error" size="large">Download</Button><br /><br /></Grid>
                    <Grid sx={i3} item xs={12} lg={4}><Button variant="contained" color="error" size="large">Download</Button><br /><br /></Grid>

                    <br />

                </Grid>
                <br />
                <Grid container>

                </Grid>


                <br />


            </Box>

















        </Box>

    )

}

export default Home
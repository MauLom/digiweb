import * as React from "react"
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Button, Grid } from "@mui/material";
import TablaRankings from "../components/tablaRankings";
import Header from "../components/header";
import SectionBuy from "../components/sectionBuy";

const Home = () => {

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
            paddingTop: "20%",
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
    return (
        <Box>
            <Grid sx={styles.mainimage} container>
                <Grid item xs={12} lg={12}><Stack sx={styles.menubuttons} direction="Row">
                    <Header />
                </Stack>
                </Grid>
                <Grid item xs={12} lg={12}>
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
                <Grid sx={styles.btngroup} item xs={12} lg={12}>
                    <TablaRankings />
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
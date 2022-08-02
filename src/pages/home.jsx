import * as React from "react"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Grid } from "@mui/material";
import TablaRankings from "../components/tablaRankings";
import Header from "../components/header";
import SectionBuy from "../components/sectionBuy";

const Home = () => {

    const styles = {
        sectionheader: {
            height: "50px",
            width: "100%",
            backgroundColor: "#AFECFF"
        },
        contentmainimage: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center"

        },
        mainimage: {
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "600px",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/main.png"})`,
            width: "90%",
            backgroundRepeat: "no-repeat",
            borderRadius:"111px"


        },
        contentsecondimage: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
        },
        secondimage: {
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "350px",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/second.png"})`,
            width: "90%",
            backgroundRepeat: "no-repeat",
            borderRadius:"111px"

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
        gridcontent: {
            alignContent: "spaceBetween"
        },
        contentstack: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        piestyle: {
            width: "100%",
            height: "30px",
            alignItems: "center",
            justifyContent: "center"

        },
        piecolor: {
            backgroundColor: "black",
            width: "80%",
            height: "50px",
            alignItems: "center",
            justifyContent: "center"
        }
    }
    return (
        <Box>

            <Stack sx={styles.sectionheader} direction="Row">
                <Header />
            </Stack>
            <br />
            <Stack sx={styles.contentmainimage}>
                <Grid sx={styles.mainimage} container>
                    <Grid item xs={12} lg={12}>
                        <Stack sx={styles.menubuttons} direction="Row">

                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={12}>
                        <Stack sx={styles.buttondownload} direction="Row">
                            <Button variant="contained" color="error" size="large">Download</Button>

                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <br />
            <Stack sx={styles.contentsecondimage}>
                <h2><font face="Itim" color="#D3D074">Changelog</font> </h2>
                <Stack sx={styles.secondimage}></Stack>

            </Stack>
            <br />
            <h2><font face="Itim" color="#D3D074">Pick your free bundle!</font> </h2>

            <Stack sx={styles.contentstack} direction="Row">
                <SectionBuy />
                <br />
            </Stack>
            <h2><font face="Itim" color="#D3D074">Be the best tamer and win prizes</font> </h2>


            <Grid>
                <Grid item xs={12} lg={12}>
                    <TablaRankings />
                </Grid>
            </Grid>
            <br />
            <Stack sx={styles.piestyle} direction="Row">
                <Stack sx={styles.piecolor} direction="Col">
                    <Stack>
                        <h3><font color="white">Follow us and get gift’s</font> </h3>
                    </Stack>
                </Stack>
            </Stack>
            <br />
            <br />
            <br />

        </Box>
    )
}
export default Home
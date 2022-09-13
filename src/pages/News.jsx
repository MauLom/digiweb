import * as React from "react"
import Box from '@mui/material/Box';
import { Stack, Grid } from '@mui/material';
import Header from "../components/header";
const News = () => {
    const styles = {
        sectionheader: {
            height: "400px",
            width: "100%",
            backgroundColor: "#AFECFF",

        },
        content1: {
            height: "100%",
            widht: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "0%"
        },
        div: {
            height: "100%",
            widht: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
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
        <Grid  container>
            <Stack sx={styles.sectionheader} direction="Row"> 
            <Grid item xs={12} lg={12} ><Header/></Grid>
            <Stack sx={styles.content1} direction="Row">
            
            </Stack>
             </Stack>
             
                    
             <Grid item sx={styles.content1} xs={12} lg={4}>
                        <center><font size="50" color="white">Welcome back <br /> tamers</font></center>
                    </Grid>
                    <Grid item xs={12} lg={8}>
                        <img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="80%" width="80%" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={12}><div sx={styles.div}><h4>Outstanding news</h4></div></Grid>  

                <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="80%" width="80%" alt="" /><br/><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Grid>
                <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="80%" width="80%" alt="" /><br/><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Grid>
                <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="80%" width="80%" alt="" /> <br /> <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> </Grid>
                <br />
                <Grid item xs={12} lg={12}><div sx={styles.div}><h4></h4></div></Grid>  
                <br />
                <br />
                <Grid item xs={12} lg={12}><div sx={styles.div}><h4></h4></div></Grid>  
                <br />
                <Grid item xs={12} lg={12}><div sx={styles.div}><h4>latest news</h4></div></Grid>  

                <br />
                <Stack sx={styles.div} direction="row">
                    <br />
                    <br />
                <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="100%" width="100%" alt="" /></Grid>
                <Grid item xs={12} lg={4}><font color="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</font></Grid>
                </Stack>
                <br />
                <Stack sx={styles.div} direction="row">
                    <br />
                    <br />
                <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="100%" width="100%" alt="" /></Grid>
                <Grid item xs={12} lg={4}><font color="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</font></Grid>
                </Stack>
                <br />
                <Stack sx={styles.div} direction="row">
                    <br />
                    <br />
                <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="100%" width="100%" alt="" /></Grid>
                <Grid item xs={12} lg={4}><font color="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</font></Grid>
                </Stack>
                <br />
                <Stack sx={styles.piestyle} direction="Row">
                <Stack sx={styles.piecolor} direction="Col">
                    <Stack>
                        <h3><font color="white">Follow us and get gift’s</font> </h3>
                    </Stack>
                </Stack>
            </Stack>




        </Grid>
    )
}
export default News
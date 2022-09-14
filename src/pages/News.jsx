import * as React from "react"
import { Stack, Grid } from '@mui/material';
import Header from "../components/header";
import SectionMainnews from "../components/sectionmainnews";
import SectionInfo from "../components/sectionInfo";
import { Box } from "@mui/system";
import SectionListnews from "../components/sectionListnews";
const News = () => {
    const styles = {
        sectionheader: {
            height: "400px",
            width: "100%",
            backgroundColor: "#AFECFF",
            justifyContent: "space-between",
        },
        content1: {
            height: "100%",
            widht: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: "10%"
        },
        content2: {
            height: "20px",
            widht: "100%",
            alignItems: "left",
            justifyContent: "flex-start",
            paddingTop: "0%"
        },
        content1: {
            height: "100%",
            widht: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            paddingTop: "5%"
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
            <Stack sx={styles.sectionheader}> 
            <Stack sx={styles.content2}>
            <Header/>
            </Stack>
            <Stack sx={styles.content1}>
                <SectionMainnews/>
            </Stack>
             </Stack>
             
             <Stack sx={styles.content1}>
                <SectionInfo></SectionInfo>
             </Stack>
             <br />
                <Stack sx={styles.content3}>
                <SectionListnews/>
                </Stack>
                <br />
                <Stack sx={styles.piestyle} direction="Row">
                <Stack sx={styles.piecolor} direction="Col">
                    <Stack>
                        <h3><font color="white">Follow us and get gift’s</font> </h3>
                    </Stack>
                    
                </Stack>
            </Stack>
        </Box>
    )
}
export default News

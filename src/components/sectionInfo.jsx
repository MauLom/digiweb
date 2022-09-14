import { Grid } from '@mui/material'
import React from 'react'

const sectionInfo = () => {
    return (
        <Grid container>
            <br />
            <br />
            <br />
            <Grid item xs={12} lg={12}><div><h4>Outstanding news</h4></div></Grid>

            <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="50%" width="80%" alt="" /><br /><p><font color="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</font><br /> <br /><br /> <br /><br /> <br /></p></Grid><br /><br />
            <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="50%" width="80%" alt="" /><br /><p><font color="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</font></p> <br /><br /><br /> <br /><br /> <br /></Grid><br /><br />
            <Grid item xs={12} lg={4}><img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="50%" width="80%" alt="" /> <br /> <p><font color="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</font></p> <br /></Grid>
        
        </Grid>
    )
}

export default sectionInfo
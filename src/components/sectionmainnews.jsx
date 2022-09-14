import React from 'react'
import { Grid } from '@mui/material';


const sectionmainnews = () => {

  return (
    <Grid container>
      <Grid item xs={12} lg={4}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <font size="50" color="white">Welcome back <br /> tamers</font>
      </Grid>
      <Grid item xs={12} lg={8}>
        <img src={process.env.PUBLIC_URL + '/imagenew1.png'} height="80%" width="70%" alt="" />
      </Grid>
    </Grid>
  )
}

export default sectionmainnews
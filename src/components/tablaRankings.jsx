import * as React from 'react'
import { Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const TablaRankings = () => {
  const styles = {
    stylecontent: {
      backgroundImage: "url(https://img2.rtve.es/im/5829788/?w=900)",
      backgroundSize: "cover",
    },
    stylerowmain: {
      backgroundColor: "black",
    }

  }
  function createData(rank, name, vocation, level, server) {
    return { rank, name, vocation, level, server };
  }

  const rows = [
    createData('Rango 1', 'nombre 1', 'vocación 1', 1, 'server 1'),
    createData('Rango 2', 'nombre 2', 'vocación 2', 2, 'server 2'),
    createData('Rango 3', 'nombre 3', 'vocación 3', 3, 'server 3'),
    createData('Rango 4', 'nombre 4', 'vocación 4', 4, 'server 4'),
    createData('Rango 5', 'nombre 5', 'vocación 5', 5, 'server 5'),
  ];
  return (
    <Grid container sx={{ width: "100%" }} justifyContent="center">
      <Grid item xs={12} lg={10}>
        <Stack direction="column" justifyContent="center"
          alignItems="center">
          <TableContainer sx={styles.stylecontent} component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow sx={styles.stylerowmain}>
                  <TableCell align="center"><font color="white">Rank</font> </TableCell>
                  <TableCell align="center"><font color="white">Name</font></TableCell>
                  <TableCell align="center"><font color="white">Vocation</font></TableCell>
                  <TableCell align="center"><font color="white">Level</font></TableCell>
                  <TableCell align="center"><font color="white">Server</font></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rank}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.vocation}</TableCell>
                    <TableCell align="left">{row.level}</TableCell>
                    <TableCell align="left">{row.server}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />


        </Stack>
      </Grid>
    </Grid>
  )
}

export default TablaRankings
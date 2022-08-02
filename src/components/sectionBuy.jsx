import * as React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const SectionBuy = () => {
    const styles={
        img1:{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "385px",
            width: "80%",
            borderRadius:"111px",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/present1.png"})`
        },
        img2:{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "385px",
            width: "80%",
            borderRadius:"111px",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/present2.png"})`  
        },
        img3:{
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "385px",
            width: "80%",
            borderRadius:"111px",
            backgroundImage: `url(${process.env.PUBLIC_URL + "/present3.png"})`  
        }
    }
   
    //const image1 = process.env.PUBLIC_URL + "/present1.png";
    

    
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
       setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid  container>
            <p></p>
            <Grid item xs={12} lg={4}><Button sx={styles.img1} onClick={handleClickOpen}></Button><br /><br /></Grid>
            <Grid item xs={12} lg={4}><Button sx={styles.img2} onClick={handleClickOpen}></Button><br /><br /></Grid>
            <Grid item xs={12} lg={4}><Button sx={styles.img3} onClick={handleClickOpen}></Button><br /><br /></Grid>

            <br />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>

        </Grid>
    )
}
export default SectionBuy;



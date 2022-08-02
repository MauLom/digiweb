import * as React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const SectionBuy = () => {
   
    const image1 = process.env.PUBLIC_URL + "/present1.png";
    const image2 = process.env.PUBLIC_URL + "/present2.png";
    const image3 = process.env.PUBLIC_URL + "/present3.png";

    
    const [open, setOpen] = React.useState(false);
    //const handleClickOpen = () => {
      //  setOpen(true);
    //};

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid  container>
            <p></p>
            <Grid item xs={12} lg={4}><img src={image1} height="385px" width="80%" alt="" /><br /><br /></Grid>
            <Grid item xs={12} lg={4}><img src={image2} height="385px" width="80%" alt="" /> <br /><br /></Grid>
            <Grid item xs={12} lg={4}><img src={image3} height="385px" width="80%" alt="" /> <br /></Grid>

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



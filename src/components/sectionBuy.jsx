import * as React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack } from '@mui/material';

const SectionBuy = () => {
    const styles = {
        image1: {
            
            height: "300px",
            width: "90%",
            backgroundImage: "url(https://png.pngtree.com/png-clipart/20201209/original/pngtree-christmas-unboxing-day-png-image_5680724.jpg)",
            backgroundSize: "cover",
            borderRadius:"30px",

        },
        image2: {
            
            height: "300px",
            width: "90%",
            backgroundImage: "url(https://elvortex.com/wp-content/uploads/2020/06/Digimon-Adventure-Regresa-FT.jpg)",
            backgroundSize: "cover",
            borderRadius:"30px",

        },
        image3: {
           
            height: "300px",
            width: "90%",
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qXDhYwZl_0h31lfOqoitJrSbZEkUzCQukA&usqp=CAU)",
            backgroundSize: "cover",
            borderRadius:"30px",

        },
        imgcontainer:{
            width: "80%"


        }
    }
    const [open, setOpen] = React.useState(false);
    //const handleClickOpen = () => {
      //  setOpen(true);
    //};

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid sx={styles.imgcontainer} container>
            <p></p>
            <Grid item xs={12} lg={4}><Stack sx={styles.image1}> </Stack><br /></Grid>
            <Grid item xs={12} lg={4}><Stack sx={styles.image2}> </Stack> <br /></Grid>
            <Grid item xs={12} lg={4}><Stack sx={styles.image3}> </Stack> <br /></Grid>

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



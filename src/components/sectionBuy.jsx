import * as React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material';

const SectionBuy = () => {
    const styles = {
        image1: {
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "18%",
            height: "70%",
            width: "70%",
            backgroundImage: "url(https://png.pngtree.com/png-clipart/20201209/original/pngtree-christmas-unboxing-day-png-image_5680724.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "50%"
        },
        image2: {
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "18%",
            height: "80%",
            width: "80%",
            backgroundImage: "url(https://elvortex.com/wp-content/uploads/2020/06/Digimon-Adventure-Regresa-FT.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "50%"
        },
        image3: {
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "18%",
            height: "80%",
            width: "80%",
            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qXDhYwZl_0h31lfOqoitJrSbZEkUzCQukA&usqp=CAU)",
            backgroundSize: "cover",
            backgroundPosition: "50%"
        }
    }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid sx={styles.gridcontent} container>
            <p></p>
            <Grid sx={styles.image1} item xs={12} lg={4}><Button variant="contained" color="error" size="large" onClick={handleClickOpen}>Download</Button><br /><br /></Grid>
            <Grid sx={styles.image2} item xs={12} lg={4}><Button variant="contained" color="error" size="large" onClick={handleClickOpen}>Download</Button><br /><br /></Grid>
            <Grid sx={styles.image3} item xs={12} lg={4}><Button variant="contained" color="error" size="large" onClick={handleClickOpen}>Download</Button><br /><br /></Grid>

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



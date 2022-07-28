import * as React from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const Header=() =>{
   
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
        <div>
            <br />
            <Button variant="outlined" color="error" onClick={handleClickOpen}>Login</Button>
            <Dialog open={open} onClose={handleClose}>

                <center><DialogTitle>Login to Account <br /><hr /></DialogTitle></center>
        <DialogContent>

          <DialogContentText>
            Username
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Username"
            type="text"
            fullWidth
            variant="outlined"
          />
          <br />
          <DialogContentText>
            <br />
            Password
          </DialogContentText>
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Enter Password"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
            

        </DialogActions>
        <center><Button variant="outlined" color="error">Login</Button> <br />
            <Button variant="text">Forgot password?</Button> <br />
            <Button variant="text">Register here</Button>
            <br />
            <Button onClick={handleClose}>Cancel</Button>



            </center>
      </Dialog>
            </div>
    )
}
export default Header;

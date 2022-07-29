import * as React from 'react'
import { Stack,Button, ButtonGroup, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const Header = () => {
  const styles={
    
    Stylediv:{
      alignItems: "left",
       justifyContent: "left",
       width:"100%"
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [userName, setUserName] = React.useState('')
  const [userPassword, setUserPassword] = React.useState('')


const handlChangeUserName = (event) => {
        setUserName(event.target.value)
        setUserPassword(event.target.value)
        console.log(userName);
        console.log(userPassword);
    }

  return (

    <div>

      <Stack sx={styles.Stylediv} direction="Row">

      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={handleClickOpen}><font color="white">Login</font></Button>
        <Button><font color="white">Forum</font></Button>
        <Button><font color="white">Market</font></Button>
        <Button><font color="white">News</font></Button>
      </ButtonGroup>

      </Stack>
      <br />
      <br />
      <form>

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
            required=""
            value={userName} onChange={(e)=> setUserName(e.target.value)}

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
            type="password"
            fullWidth
            variant="outlined"
            required=""
            value={userPassword} onChange={(e)=> setUserPassword(e.target.value)}

          />
        </DialogContent>
        <DialogActions>
        </DialogActions>
        <center><Button onClick={(e) => { handlChangeUserName(e) }} variant="outlined" color="error">Login</Button> <br />
          <Button variant="text">Forgot password?</Button> <br />
          <Button variant="text">Register here</Button>
          <br />
          <Button onClick={handleClose}>Cancel</Button>
        </center>
      </Dialog>
      </form>

    </div>
  )
}
export default Header;

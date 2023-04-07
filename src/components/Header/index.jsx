import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { DialogContent } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from 'Auth/components/Login';
import Register from 'Auth/components/Register';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

export default function Header() {
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
  };

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);

  const user = useSelector((state) => state.user.current);
  const loggedUser = !!user.id;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') return;
    setOpen(false);
  };

  const handleChangeRegister = () => {
    handleClose();
    setMode(MODE.REGISTER);
    handleClickOpen();
  };

  const handleChangeLogin = () => {
    handleClose();
    setMode(MODE.LOGIN);
    handleClickOpen();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="app-bar__link">
            <CodeIcon sx={{ mr: 2 }} />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="app-bar__link">
              EZ Shop
            </Link>
          </Typography>
          <NavLink className="app-bar__link" to="/todo">
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink className="app-bar__link" to="/album">
            <Button color="inherit">Album</Button>
          </NavLink>
          {loggedUser ? (
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          ) : (
            <NavLink className="app-bar__link">
              <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>

      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogContent>
          {mode === MODE.LOGIN && (
            <>
              {/* This is login page */}
              <Login closeDialog={handleClose} />
              <Box sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                <Button sx={{ fontSize: '17px', textTransform: 'unset' }} variant="text" onClick={handleChangeRegister}>
                  Do not have an account. Please to sign up!
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.REGISTER && (
            <>
              {/* This is register page */}
              <Register closeDialog={handleClose} />
              <Box sx={{ textAlign: 'center', textDecoration: 'underline' }}>
                <Button sx={{ fontSize: '17px', textTransform: 'unset' }} variant="text" onClick={handleChangeLogin}>
                  Already have an account. Please to sign in!
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { DialogContent, Menu, MenuItem, ThemeProvider, createTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Login from 'Auth/components/Login';
import Register from 'Auth/components/Register';
import { logout } from 'Auth/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

// Demo override css in MUI
const theme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          display: 'block',
          padding: '6px 16px',
          color: 'deeppink',
        },
      },
    },
  },
});

export default function Header() {
  const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);

  const user = useSelector((state) => state.user.current);
  const loggedUser = !!user?.id;

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

  // Code of menu popover
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleCloseMenu();
    dispatch(logout());
  };

  const isOpen = Boolean(anchorEl);
  const idMenu = open ? 'user-popover' : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="app-bar__link">
            <CodeIcon sx={{ mr: 2 }} />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="app-bar__link">
              Tiki Shop
            </Link>
          </Typography>
          <NavLink className="app-bar__link" to="/add-todo">
            <Button color="inherit">Todo</Button>
          </NavLink>
          <NavLink className="app-bar__link" to="/clock">
            <Button color="inherit">Clock</Button>
          </NavLink>
          {loggedUser ? (
            // User login: show info user
            <ThemeProvider theme={theme}>
              <IconButton
                id={idMenu}
                aria-controls={isOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                color="inherit"
                onClick={handleOpenMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id={idMenu}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
                MenuListProps={{
                  'aria-labelledby': idMenu,
                  sx: {
                    '.MuiMenuItem-root': {
                      display: 'block',
                      padding: '6px 16px',
                    },
                  },
                }}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </ThemeProvider>
          ) : (
            // User not logged: show button login
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

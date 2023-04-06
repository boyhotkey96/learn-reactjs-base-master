import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Register from 'Auth/components/Register';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'backdropClick' || reason === 'escapeKeyDown') return;
    setOpen(false);
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
          <NavLink className="app-bar__link">
            <Button color="inherit" onClick={handleClickOpen}>
              Register
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>

      <Dialog
        fullWidth
        /* disableEscapeKeyDown
        onBackdropClick={handleClose} */
        open={open}
        onClose={handleClose}
      >
        {/* This is Register Page */}
        <Register onClose={handleClose} />
      </Dialog>
    </Box>
  );
}

import  { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import MoreIcon from '@mui/icons-material/MoreVert';


import UserContext from './store/User-Context';

export default function Navbar() {
  const { user, logoutMutation } = useContext(UserContext);
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0C1844' }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          
          <Typography sx={{textDecoration:'none'}} component={Link} to="/" color="inherit">
            Project</Typography>
            
          
          <Box sx={{ flexGrow: 1 }} />
          {user && (
            <Link to="/" component={Button} color="inherit">
              {user.username}
            </Link>
          )}
       
          
          {!user && (
            <Link   to="/login" component={Button} color="inherit" >
              Login
            </Link>
            
          )}
         {user && <Button     component={Link} to="/new" color="inherit">New</Button>}
          
          {user && (
            <Button onClick={() => logoutMutation.mutate()} color="inherit">
              Logout
            </Button>
          )}
          <IconButton size="large" edge="end" color="inherit" aria-label="display more actions">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
import React, { useContext, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../components/store/User-Context';

const Login = () => {
  const navigate = useNavigate();
  const { loginUserMutation } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');
    loginUserMutation.mutate({ username, password });
  };

  useEffect(() => {
    if (loginUserMutation.isSuccess) {
      toast.success('Logged in successfully', {
        position: "top-left",
      });
      navigate('/');
    }

    if (loginUserMutation.isError) {
      const errorMessage = loginUserMutation.error.response?.data?.message || 'An error occurred';
      toast.error(errorMessage, {
        position: "top-left",
      });
    }
  }, [loginUserMutation.isSuccess, loginUserMutation.isError, loginUserMutation.error, navigate]);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Typography component={Link} to="/register">Don't have an account? Register</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

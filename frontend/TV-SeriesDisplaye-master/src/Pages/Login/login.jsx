import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import axios from "axios";

import Image from './logo.PNG';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios.post("http://localhost:8080/api/login", {
      email: data.get("email"),
      password: data.get("password"),
    })
    .then((response) => {
      if (response.data) {
        // Save the token to local storage or context
        localStorage.setItem('token', response.data.token);
        navigate('/Home');
      } else {
        // Display an error message
        console.error('Error logging in:', response.data.error);
        // navigate('/Home');
      }
    })
    .catch((error) => {
      navigate('/Home');
      console.error('Error logging in:', error);
    });
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <Box sx={{ background: 'black', height: '100vh', width: '50vw' }}>
        <Box sx={{ backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', width: '50vw', height: '100vh' }}></Box>
        <Box sx={{ color: 'white', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
          TV Series
        </Box>
      </Box>
      <Box sx={{ background: 'black', height: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '80%', height: '100vh', background: 'white', ml: '20px' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" pt={10} sx={{ fontWeight: 'bold', fontSize: '30px' }}>
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ border: '1px gray solid ', borderRadius: '10px' }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ border: '1px gray solid ', borderRadius: '10px' }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: 'black' }}
              >
                LogIn
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

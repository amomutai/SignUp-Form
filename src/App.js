import React, {useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function App() {

  const [state, setState] = useState({
    firstName: "",
    location: "",
    lastName: "",
    email: "",
    terms: false
  });

  const handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const post = JSON.stringify({
      location: data.get('location'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
    });
    console.log(post);
  };
  
  return (
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} className="box-content">
            <div className="top-section">
              <Typography component="h1" variant="h4" className="title-text">
                Create account
              </Typography>
              <div className="signin-link">
                <span>Already have an account? </span>
                <Link href="#" variant="body2">
                    Sign in
                </Link>
              </div>
            </div>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label={ state.location === "" ? "Location": ""}
                  type="text"
                  id="location"
                variant="filled"
                InputLabelProps={{ shrink: false }}
                onChange={handleChange}
                InputProps={{ disableUnderline: true }}
                className="input-item"
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                id="firstName"
                onChange={handleChange}
                  InputLabelProps={{shrink: false}}
                  label={ state.firstName === "" ? "First Name" : ""}
                  className="input-field"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  id="lastName"
                  label={state.lastName === '' ? "Last Name" : ""}
                name="lastName"
                onChange={handleChange}
                  InputLabelProps={{shrink: false}}
                  InputProps={{ disableUnderline: true }}
                  className="input-field"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                  id="email"
                  label={state.email === "" ? "Email Address": ""}
                  InputLabelProps={{shrink: false}}
                  name="email"
                className="input-field"
                onChange={handleChange}
                />
              </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="submit-btn"
            endIcon={<ArrowForwardIcon />}
            disabled={!state.email || !state.firstName || !state.lastName || !state.terms}
          >
            <span className="submit-btn-text">Sign up</span>
            
          </Button>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  id="terms"
                  name="terms"
                  checked={state.terms}
                  onChange={handleChange}
                  color="primary" />
              }
              label={
                  <div>
                    <span>I have read and agreed to the </span>
                    <Link href="#terms" variant="body2" className="terms-link" >
                      Terms of Service
                    </Link>
                  </div>
              }
            />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default App;

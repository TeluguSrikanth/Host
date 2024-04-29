import React from 'react';
import { Container, Grid, Typography, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import useStyles from '../theme/theme';
import Header from '../components/Header'; 
import Illustration from '../components/Illustration'; 
import SignupForm from '../components/SignupForm'; 

const SignupPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.customContainer}>
      <Header />
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.illustrationWrapper}>
          <Illustration />
        </Grid>
        <Grid item xs={12} md={6} style={{
            backgroundColor: '#F7FAFC',
            padding: '150px',
            }}>
          <SignupForm />
        </Grid>
      </Grid>
    </Container>
  );
};


export default SignupPage;

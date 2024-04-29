import React from 'react';
import { Container, Grid, Typography, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import useStyles from '../theme/theme';
import Header from '../components/Header'; 
import IllustrationPhoneVerify from '../components/VerifyPhone/IllustrationPhoneVerify'; 
import VerifyForm from '../components/VerifyPhone/Form';

const VerifyPhone = () => {
  const classes = useStyles();

  return (
    <Container className={classes.customContainer}>
      <Header />
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} md={6} className={classes.illustrationWrapper}>
          <IllustrationPhoneVerify />
        </Grid>
        <Grid item xs={12} md={6} style={{
            backgroundColor: '#F7FAFC',
            paddingTop: '300px',
            paddingRight: '150px',
            paddingLeft: '150px',
            paddingBottom: '150px',
            }}>
          <VerifyForm />
        </Grid>
      </Grid>
    </Container>
  );
};


export default VerifyPhone;

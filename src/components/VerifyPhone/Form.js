import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, InputAdornment } from '@material-ui/core';
import useStyles from '../../theme/theme';
import { Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const VerifyForm = () => {
    const classes = useStyles();
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();
    const handleMobileChange = (event) => {
      const value = event.target.value;
      // Allow only up to 10 digits
      if (value.length <= 10 && /^[0-9\b]+$/.test(value)) {
        setMobileNumber(value);
      }
    };
   
  return (
    <Paper className={classes.formWrapper} elevation={0}>
    <h2 className={classes.formHeading}
    >Verify mobile number</h2>
    <p className={classes.formSubHeading}
    >A text with One Time Password  (OTP) has been sent to your mobile number +91-9894409876. Change</p>
    <form noValidate autoComplete="off" className={classes.form}>
      <TextField
        className={classes.textField}
        required
        fullWidth
        id="otp"
        label="Enter OTP"
        value={mobileNumber}
        onChange={handleMobileChange}
        InputProps={{
          inputProps: {
            maxLength: 10,
            inputMode: 'numeric', 
            pattern: "\\d{10}",
          },
        }}
      />
        <span className={classes.resend}>Resend OTP</span>

      <Button className={classes.verifyButton} onClick={() => navigate('/verify-phone')} >
        Create account
      </Button>
    </form>
    </Paper>
  );
};

export default VerifyForm;

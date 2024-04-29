import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, InputAdornment } from '@material-ui/core';
import useStyles from '../theme/theme';
import { Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const classes = useStyles();
    const [isMobileFocused, setIsMobileFocused] = useState(false);
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
    >Create your account</h2>
    <p className={classes.formSubHeading}
    >It's free and easy</p>
    <form noValidate autoComplete="off" className={classes.form}>
      <TextField className={classes.textField} required fullWidth id="full-name" label="Full name" />
      <TextField
        className={classes.textField}
        required
        fullWidth
        id="mobile-number"
        label="Mobile number"
        value={mobileNumber}
        onChange={handleMobileChange}
        onFocus={() => setIsMobileFocused(true)}
        onBlur={() => setIsMobileFocused(false)}
        InputProps={{
          startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          inputProps: {
            maxLength: 10, // Limit characters to 10
            inputMode: 'numeric', // Ensures a numeric keyboard on mobile devices
            pattern: "\\d{10}", // Ensures the input is 10 digits
          },
        }}
        InputLabelProps={{
          shrink: isMobileFocused,
          style: isMobileFocused ? {} : { left: '48px' },
        }}
      />
      <TextField className={classes.textField} required fullWidth id="email" label="Email Address" />
      <TextField className={classes.textField} required fullWidth id="password" label="Password" type="password" 
       helperText="Must be 8 characters at least"
       FormHelperTextProps={{
        className: classes.helperText,
      }}
      />
      <TextField className={classes.textField} required fullWidth id="confirm-password" label="Confirm Password" type="password"
      helperText="Must be 8 characters at least"
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      />
      
      <FormControlLabel
        control={<Checkbox value="agree" color="primary" style={{ width: '20px', height: '20px' }} />}
        label={
          <span>
            By creating an account means you agree to the{' '}
            <a href="#" className={classes.link}>
              Terms and Conditions
            </a> and our{' '}
            <a href="#" className={classes.link}>
              Privacy Policy
            </a>
          </span>
        }
        className={classes.checkboxLabel}
      />

      <Button className={classes.verifyButton} onClick={() => navigate('/verify-phone')} >
        Verify mobile number
      </Button>
      <div className={classes.divider}>
        <hr className={classes.hr} />
        <span className={classes.span}>or do it via other accounts</span>
        <hr className={classes.hr} />
      </div>
      <Button className={classes.gmailButton} fullWidth variant="contained" color="secondary">
        Gmail
      </Button>
    </form>
    </Paper>
  );
};

export default SignupForm;

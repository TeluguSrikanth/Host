import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  customContainer: {
    maxWidth: '1420px',
    display: 'flex',
    flexDirection: 'column', // Align children vertically
    justifyContent: 'center', // Center children vertically
    margin: '0 auto', // Center the container horizontally
    padding: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: '#fff00',
  },
  logo: {
    width: 'auto', 
    height: '36px', 
  },
  illustrationWrapper: {
    textAlign: 'center',
    marginBottom: theme.spacing(4), // Space below the illustration
    marginTop: '100px',
  },
    illustration: {
    width: '458px',
    height: '458px',
    },
    illustrationText: {
    color: '#000000',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '32px',
    marginTop: theme.spacing(2),
    },
  formWrapper: {
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '40px',
    paddingRight: '40px',
    borderRadius: theme.shape.borderRadius, 
    backgroundColor: '#fff',
    maxWidth: '400px',
    margin: 'auto',
    borderRadius: '12px',
  },
  textField: {
    marginBottom: theme.spacing(2),
    '& label': {
      color: '#425466', 
      fontSize: '12px',
      fontWeight: '400',
    },
    '& label.Mui-focused': {
      color: '#425466', 
    },
    '& .MuiInput-underline:before': {
      borderBottom: `0.75px solid #42546633`, 
    },
    '& .MuiInput-underline:after': {
      borderBottom: `1px solid #42546633`, 
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: `1px solid #42546633`, 
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#425466',
      },
      '&:hover fieldset': {
        borderColor: '#425466', 
      },
      '&.Mui-focused fieldset': {
        borderColor: '#425466', 
      },
    },
    '& .MuiInputBase-input': {
      fontSize: '12px',
      fontWeight: '400',
      color: '#425466', 
    },
  },
  checkboxLabel: {
    marginTop: theme.spacing(2),
    color: '#425466', 
    '& .MuiTypography-body1': { // This targets the label text in the FormControlLabel component
      fontSize: '12px',
      fontWeight: '400',
    },
    '& .MuiCheckbox-root': { // This targets the checkbox itself
      color: '#425466', 
    },
  },
  link: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: '#FF9900', 
    fontSize: '12px',
    fontWeight: '500',
    textDecoration: 'none',
  },
  verifyButton: {
    marginTop: theme.spacing(2),
    backgroundColor: '#FF9900', 
    color: '#FFFFFF',
    paddingTop: '16px',
    paddingBottom: '16px',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'none',
    width: '100%',
    /* Disable hover effect */
    '&:hover': {
      backgroundColor: '#FF9900', 
    },
  },
  gmailButton: {
    marginTop: theme.spacing(1),
    backgroundColor: '#ffffff00', 
    color: '#FF9900',
    border: '1px solid #FF9900',
    boxShadow: 'none',
    paddingTop: '12px',
    paddingBottom: '12px',
    paddingLeft: '24px',
    paddingRight: '24px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '500',
    textTransform: 'none',
    width: '100%',
    /* Disable hover effect */
    '&:hover': {
      backgroundColor: '#ffffff00', 
    },
  },
  formHeading: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#000000',
    margin: 0,
    textAlign: 'center',
  },
  formSubHeading: {
    fontSize: '16px',
    color: '#000000',
    margin: 0,
    textAlign: 'center',
  },
  divider : {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  hr: {
    border: '1px solid #42546610',
    width: '74.5px',
  },
  span: {
    color: '#425466',
    fontSize: '12px',
    fontWeight: '400',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  helperText: {
    fontSize: '10px',
    fontWeight: '400',
    color: '#425466',
  },
  resend : {
    color: '#FF9900',
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'center',
    display: 'block',
    marginTop: '10px',
  },
  formSubHeading: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#425466',
  },
  gridContainer: {
    marginTop: '-75px',
  },
}), { index: 1 });

export default useStyles;

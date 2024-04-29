import React from 'react';
import useStyles from '../theme/theme';
import illustrationImage from '../assets/images/signup-illustration.png';

const Illustration = () => {
  const classes = useStyles();

  return (
    <div className={classes.illustrationWrapper}>
  <img src={illustrationImage} alt="Illustration" className={classes.illustration} />
  <h3 className={classes.illustrationText}>Let’s see what we have new, check it out! So<br></br> maybe write here something more.</h3>
</div>
  );
};

export default Illustration;

import React from 'react';

import fuseLogo from '../../assets/images/fuse-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={fuseLogo} alt="fuseLogo" />
    </div>
);

export default logo;
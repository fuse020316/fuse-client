import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/cart">Cart</NavigationItem>
        <NavigationItem link="/profile">My Profile</NavigationItem>
        <NavigationItem link="/help">Help</NavigationItem>
    </ul>
);

export default navigationItems;
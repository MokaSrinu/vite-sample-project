import React from 'react';
import classes from './Layout.module.scss';
import { TopNavbar } from '../molecules';
import { Outlet } from 'react-router-dom';

const Layout = (props) => {
    const { children } = props;
  return (
    <div className={classes.Layout}>
        <TopNavbar />
        <div className={classes.Body}>
            <Outlet />
        </div>
    </div>
  )
};

export default Layout;
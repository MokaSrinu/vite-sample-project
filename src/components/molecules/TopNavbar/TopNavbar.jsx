import React from 'react';
// import PropTypes from 'prop-types';
import classes from './TopNavbar.module.scss';
import { Link } from 'react-router-dom';

const TopNavbar = props => {
  return (
    <div className={classes.TopNavbar}>
        <div className={classes.Title}>
            TopNavbar
        </div>
        <div className={classes.NavigationWrap}>
            <Link to='/home' className={classes.Link}>Home</Link>
            <Link to='/traditional-super-heros' className={classes.Link}>Traditional-Super-Heros</Link>
            <Link to='rq-super-heros' className={classes.Link}>RQ-Super-Heros</Link>
        </div>
    </div>
  )
};

TopNavbar.propTypes = {}

export default TopNavbar;
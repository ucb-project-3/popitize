import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Button, Paper, Hidden } from '@material-ui/core';
import { Md } from '../util/viewPort';

const DesktopNav = ({
  swipe,
  index,
  openRegister,
  logout
}) => (
  <Hidden smDown>
    <Paper id="desktop-nav">
      <Tabs
        id="dash-tabs"
        value={index}
        onChange={swipe}
        indicatorColor="primary"
        textColor="primary"
        textPr
      >
        <Tab disableRipple label="Spaces" />
        <Tab disableRipple label="Popups" />
        <Tab disableRipple label="Profile" />
      </Tabs>
      <div style={{ padding: '.5rem' }}>
        <Button
          color="primary"
          className="nav-button"
          onClick={openRegister}
          variant="raised"
        >
      Register
        </Button>
        <div
          style={{
          display: 'inline-block',
          width: '.5rem'
        }}
        />
        <Button
          color="primary"
          variant="raised"
          className="nav-button"
          onClick={logout}
        >
      logout
        </Button>
      </div>
    </Paper>
  </Hidden>
);

DesktopNav.propTypes = {
  index: PropTypes.number.isRequired,
  swipe: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  openRegister: PropTypes.func.isRequired,
};

export default DesktopNav;

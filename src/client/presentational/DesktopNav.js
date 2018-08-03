import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Button, Paper, Hidden, Grow } from '@material-ui/core';

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
        // textpr
      >
        <Tab disableRipple label="Spaces" />
        <Tab disableRipple label="Popups" />
        <Tab disableRipple label="Profile" />
      </Tabs>

      <div style={{ padding: '.5rem' }}>
        <Grow in={index === 2}>
          <Button
            color="primary"
            className="nav-button"
            disabled={index !== 2}
            onClick={openRegister}
            variant="raised"
          >
      Register
          </Button>
        </Grow>
        <div
          style={{
          display: 'inline-block',
          width: '.5rem'
        }}
        />
        <Grow in={index === 2} timeout={600}>
          <Button
            color="primary"
            variant="raised"
            disabled={index !== 2}
            className="nav-button"
            onClick={logout}
          >
      logout
          </Button>
        </Grow>
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

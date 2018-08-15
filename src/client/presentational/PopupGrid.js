import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';

const HostGrid = ({
  row1,
  row2,
}) => (
  <Fragment>
    <Hidden mdDown>
      <div id="popup-grid">
        <div style={{ gridColumn: 1 }} className="host-grid-row">
          {row1}
        </div>
        <div style={{ gridColumn: 2 }} className="host-grid-row">
          {row2}
        </div>
      </div>
    </Hidden>
    <Hidden lgUp>
      <div id="host-non-grid">
        {[...row1, ...row2]}
      </div>
    </Hidden>
  </Fragment>
);

// HostGrid.PropTypes = {
//   row1: PropTypes.array.isRequired,
//   row2: PropTypes.array.isRequired,
//   row3: PropTypes.array.isRequired,
//   row4: PropTypes.array.isRequired,
//   row5: PropTypes.array.isRequired,
// };

export default HostGrid;

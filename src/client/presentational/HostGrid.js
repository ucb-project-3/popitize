import React from 'react';
import PropTypes from 'prop-types';


const HostGrid = ({
  row1,
  row2,
  row3,
  row4,
}) => (
  <div id="host-grid">
    <div style={{ gridColumn: 1 }} className="host-grid-row">
      {row1}
    </div>
    <div style={{ gridColumn: 2 }} className="host-grid-row">
      {row2}
    </div>
    <div style={{ gridColumn: 3 }} className="host-grid-row">
      {row3}
    </div>
    <div style={{ gridColumn: 4 }} className="host-grid-row">
      {row4}
    </div>
    {/* <div style={{ gridColumn: 5 }} className="host-grid-row">
      {row5}
    </div> */}

  </div>
);

// HostGrid.PropTypes = {
//   row1: PropTypes.array.isRequired,
//   row2: PropTypes.array.isRequired,
//   row3: PropTypes.array.isRequired,
//   row4: PropTypes.array.isRequired,
//   row5: PropTypes.array.isRequired,
// };

export default HostGrid;

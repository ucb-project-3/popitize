import React from 'react';
import './HostCard.scss';

class HostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hosts</h1>
        {
          this.props.hosts.map(item => (
            <div className="card">
              <p>{item.s_address_1}</p>
              <p>{item.s_city}</p>
              <p>{item.s_state}</p>
              <p>Parameter: {item.total_store_length}*{item.total_store_width}</p>
            </div>
            ))
        }
      </div>
    );
  }
}

export default HostCard;

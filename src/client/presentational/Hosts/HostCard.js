import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './HostCard.scss';
import Host from '../../containers/Hosts';

class HostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hosts Near You! </h1>
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

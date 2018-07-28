import React from 'react';
import axios from 'axios';
import HostCard from '../presentational/Hosts/HostCard';

class Host extends React.Component {
    state = {
      seedHost: [

      ]

    };

    componentWillMount() {
      axios.get('/api/hosts')
        .then((response) => {
          console.log('response ==>', response);
          this.setState({ seedHost: response.data });
        }).catch((error) => {
          console.log(error);
          this.setState({ status: 'error' });
        });
    }


    render() {
      return (
        <div>
          <HostCard
            hosts={this.state.seedHost}
          />
        </div>
      );
    }
}

export default Host;

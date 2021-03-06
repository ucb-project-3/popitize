import React, { Fragment } from 'react';
import axios from 'axios';
import { connectHosts } from '../util/connects';
import HostCard from '../presentational/HostCard';
import HostGrid from '../presentational/HostGrid';
import HostModal from '../presentational/HostModal';

class Host extends React.Component {
    state = {
      showModal: false,
      modalContent: null,
      hosts: []
    };

    componentDidMount() {
      this.getHosts();
    }

    getHosts = () => {
      axios.get('./api/hosts')
        .then((res) => {
          console.log(res.data);
          this.setState({
            hosts: res.data,
          });
        });
    }

    openModal = (data) => {
      console.log(data);
      this.setState({
        showModal: true,
        modalContent: data,
      });
    }

    closeModal = () => {
      this.setState({
        showModal: false,
        modalContent: null,
      });
    }

    renderHostCards = () => {
      if (this.state.hosts) {
        const cards = this.state.hosts
          .filter(({ accepting_renters }) => !accepting_renters)
          .map(host => (
            <HostCard
              openModal={this.openModal}
              key={host.id}
              {...host}
            />
          ));
        const gridItems = [[], [], [], [], []];
        let j = 0;
        cards.forEach((item) => {
          gridItems[j].push(item);
          if (j > 2) {
            j = 0;
          } else {
            j += 1;
          }
        });
        return (
          <HostGrid
            row1={gridItems[0]}
            row2={gridItems[1]}
            row3={gridItems[2]}
            row4={gridItems[3]}
          />
        );
      }
      return null;
    }

    render() {
      return (
        <Fragment>
          <HostModal
            showModal={this.state.showModal}
            closeModal={this.closeModal}
            content={this.state.modalContent}
            renter_id={this.props.reg.renter.id || null}
          />
          <div className="card-container">
            {this.renderHostCards()}
          </div>
        </Fragment>
      );
    }
}

export default connectHosts(Host);

// {
//   user_id: 1,
//   total_store_length: 500,
//   total_store_width: 600,
//   s_address_1: '620 2nd st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94107,
//   rental_rate: 3000,
// },
// {
//   user_id: 2,
//   total_store_length: 2000,
//   total_store_width: 3000,
//   s_address_1: '1001 Pine st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94103,
//   rental_rate: 5000,
// },
// {
//   user_id: 3,
//   total_store_length: 800,
//   total_store_width: 600,
//   s_address_1: '4400 Shellmound st',
//   s_city: 'Emneryville',
//   s_state: 'ca',
//   s_zip: 94609,
//   rental_rate: 7500,
// },
// {
//   user_id: 4,
//   total_store_length: 10000,
//   total_store_width: 20000,
//   s_address_1: '5095 Telegraph Ave Suite',
//   s_city: 'Oakland',
//   s_state: 'ca',
//   s_zip: 94102,
//   rental_rate: 10000,
// },
// {
//   user_id: 5,
//   total_store_length: 400,
//   total_store_width: 300,
//   s_address_1: '450 10th st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94103,
//   rental_rate: 1200,
// },
// {
//   user_id: 6,
//   total_store_length: 700,
//   total_store_width: 600,
//   s_address_1: '2300 16th st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94107,
//   rental_rate: 2500,
// },
// {
//   user_id: 7,
//   total_store_length: 3000,
//   total_store_width: 2000,
//   s_address_1: '448 Grove st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94102,
//   rental_rate: 5600,
// },
// {
//   user_id: 8,
//   total_store_length: 1000,
//   total_store_width: 600,
//   s_address_1: '2211 Filbert st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94123,
//   rental_rate: 6400,
// },
// {
//   user_id: 9,
//   total_store_length: 7000,
//   total_store_width: 6000,
//   s_address_1: '3001 Lyon st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94123,
//   rental_rate: 9000,
// },
// {
//   user_id: 10,
//   total_store_length: 150,
//   total_store_width: 350,
//   s_address_1: '291 Geary st',
//   s_city: 'San Francisco',
//   s_state: 'ca',
//   s_zip: 94102,
//   rental_rate: 1000,
// }

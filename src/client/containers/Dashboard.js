import React from 'react';
import Swipe from 'react-swipeable-views';
import DesktopNav from '../presentational/DesktopNav';
import Hosts from './Hosts';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    this.state.index !== nextState.index
  )

  handleChangeIndex = (event, index) => {
    if (this.state.index !== index) this.setState({ index });
  }

  logout = () => {
    window.location = '/';
  }

  OpenRegisterModal = () => {
    console.log('not implemented');
  }


  render = () => (
    <div id="dashboard-container">
      <DesktopNav
        swipe={this.handleChangeIndex}
        openRegister={this.OpenRegisterModal}
        logout={this.logout}
        index={this.state.index}
      />
      <Swipe
        index={this.state.index}
        onChangeIndex={index => this.handleChangeIndex(null, index)}
        style={{marginTop: '.5rem' }}
      >
        <Hosts />
      
      </Swipe>
    </div>
  )
}

export default Dashboard;

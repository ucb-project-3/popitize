import React from 'react';
import Swipe from 'react-swipeable-views';
import DesktopNav from '../presentational/DesktopNav';
import RegistrationModal from './RegistrationModal';
import Hosts from './Hosts';
import Renter from './Renter';
import Profile from './Profile';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      regOpen: false,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    this.state.index !== nextState.index || this.state.regOpen !== nextState.regOpen
  )

  handleChangeIndex = (event, index) => {
    if (this.state.index !== index) this.setState({ index });
  }

  logout = () => {
    window.location = '/';
  }

  openRegisterModal = () => {
    this.setState({
      regOpen: true,
    });
  }

  closeRegisterModal = () => {
    this.setState({
      regOpen: false,
    });
  }


  render = () => (
    <div id="dashboard-container">
      <DesktopNav
        swipe={this.handleChangeIndex}
        logout={this.logout}
        index={this.state.index}
        openRegister={this.openRegisterModal}
      />
      <RegistrationModal
        open={this.state.regOpen}
        onClose={this.closeRegisterModal}
      />
      <Swipe
        index={this.state.index}
        onChangeIndex={index => this.handleChangeIndex(null, index)}
        style={{ marginTop: '.5rem' }}
      >
        <Hosts />

        <Renter />

        <Profile />

      </Swipe>
    </div>
  )
}

export default Dashboard;

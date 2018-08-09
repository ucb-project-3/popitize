import React from 'react';
import Swipe from 'react-swipeable-views';
import { Fade } from '@material-ui/core';
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
    this.hostRef = React.createRef();
    this.popupRef = React.createRef();
    this.profileRef = React.createRef();
  }

  componentWillMount = () => {
    if (!localStorage.token) {
      window.location = '/';
    } else {
      const now = new Date();
      if (localStorage.exp < now.getTime()) {
        window.location = '/';
      }
    }
  }

  shouldComponentUpdate = (nextProps, nextState) => (
    this.state.index !== nextState.index || this.state.regOpen !== nextState.regOpen
  )

  handleChangeIndex = (event, index) => {
    if (this.state.index !== index) this.setState({ index });
  }

  funcPasser = (func) => {
    this.reloadImages = func;
  }

  logout = () => {
    localStorage.clear();
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

  conditionalDisplay = (ref, enter) => {
    ref.current.style.display = enter ? 'initial' : 'none';
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
        reload={this.reload}
        open={this.state.regOpen}
        onClose={this.closeRegisterModal}
      />
      <Swipe
        index={this.state.index}
        onChangeIndex={index => this.handleChangeIndex(null, index)}
      >
        <Fade
          in={this.state.index === 0}
          onExited={() => this.conditionalDisplay(this.hostRef, false)}
          onEntering={() => this.conditionalDisplay(this.hostRef, true)}
        >
          <div ref={this.hostRef}>
            <Hosts />
          </div>
        </Fade>
        <Fade
          in={this.state.index === 1}
          onExited={() => this.conditionalDisplay(this.popupRef, false)}
          onEntering={() => this.conditionalDisplay(this.popupRef, true)}
        >
          <div ref={this.popupRef}>
            <Renter />
          </div>
        </Fade>
        <Fade
          in={this.state.index === 2}
          onExited={() => this.conditionalDisplay(this.profileRef, false)}
          onEntering={() => this.conditionalDisplay(this.profileRef, true)}
        >
          <div ref={this.profileRef}>
            <Profile />
          </div>
        </Fade>
      </Swipe>
    </div>
  )
}

export default Dashboard;

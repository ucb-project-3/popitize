import React from 'react';
import { Paper, Typography, Dialog, AppBar, IconButton, Card, CardMedia, List, ListItem } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import axios from 'axios';

const placeHolder = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjlyfu3td_cAhVRJDQIHc5SDaYQjRx6BAgBEAU&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49846842%2Fi-need-two-elements-to-switch-places-via-css&psig=AOvVaw0-ofNr64KZ-xgB_AFSTrF3&ust=1533885104624824';
const origin = (
  window.location.origin === 'http://localhost:3000' ?
    'http://localhost:8080'
    :
    window.location.origin
);

class HostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.content) {
      return;
    }
    if (
      (!this.props.content && nextProps.content.id)
      || (this.props.content.id !== nextProps.content.id)
    ) {
      this.getNames(nextProps.content.id);
    }
  }

  getNames = (id) => {
    axios.post('/api/reg/gethostname', { id })
      .then((res) => {
        console.log(res.data);
        this.setState({ ...res.data });
      });
  }

  render = () => {
    if (!this.props.content) {
      return null;
    }
    const { showModal, closeModal, content } = this.props;
    return (
      <Dialog
        fullScreen
        open={showModal}
      >
        <AppBar position="static" color="secondary">
          <IconButton
            onClick={closeModal}
          >
            <Close />
          </IconButton>
        </AppBar>
        <div id="host-modal-grid">
          <div style={{ gridColumn: 1 }}>
            <Card>
              <CardMedia
                image={content.image_url ? origin + content.image_url : placeHolder}
                style={{
                paddingTop: '56.25%',
              }}
              />
            </Card>
            <div>
              <Typography align="center" variant="headline">
                {`${content.s_address_1} ${content.s_city} ${content.s_address_2 || ''} ${content.s_city}`}
              </Typography>
              <Typography variant="headline" align="center">
              Owner: {`${this.state.first_name} ${this.state.last_name}`}
              </Typography>
              <Paper elevation={4} style={{ backgroundColor: 'whitesmoke', margin: '1.5rem auto', width: 'fit-conte' }} >
                <List style={{ width: 'fit-content' }}>
                  <ListItem>
                    <Typography variant="headline">
                Available Space:
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="headline">
                  width: {content.total_store_width}sqft
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="headline">
                  length: {content.total_store_length}sqft
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="headline">
                  total: {content.total_store_length * content.total_store_width}sqft
                    </Typography>
                  </ListItem>
                </List>

              </Paper>
            </div>
          </div>
          <div style={{ gridColumn: 2 }}>
          right
          </div>
        </div>
      </Dialog>
    );
  }
}

export default HostModal;

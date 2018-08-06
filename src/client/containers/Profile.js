import React from 'react';
import { CardMedia, Card, Paper, Typography } from '@material-ui/core';
import { connectProfile } from '../util/connects';
import ProfilePic from '../imgs/cat.jpg';


// ctrl+click for docs/demos:
// https://material-ui.com/demos/selects/
// https://material-ui.com/api/menu-item/#menuitem
// https://material-ui.com/api/select/#select
// https://material-ui.com/api/form-control/#formcontrol

// ** @material-ui/core is where the component library lives
// do not use simply 'material-ui' as that is not the official material ui lib


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    console.log(this.props);
  }

  render() {
    return (
      <Paper
        style={{
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          padding: '1rem',
          background: 'whitesmoke'
        }}
      >
        <Card
          style={{
            width: 'fit-content',
            height: 'fit-content',
            borderRadius: '100%',
            margin: '1rem',
          }}
        >
          <CardMedia
            image={ProfilePic}
            style={{
            padding: '10rem',
          }}
          />
        </Card>
        <div
          style={{
            flexGrow: 99,
            display: 'flex',
            width: 'auto',
            flexFlow: 'column nowrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Typography variant="headline" component="h1">
            {this.props.user.first_name || 'Not logged in'}
          </Typography>
        </div>
      </Paper>
    );
  }
}

// this all wasnt working because the wrong components were being imported
// and the wrong props were being pased to the select

export default connectProfile(Profile);

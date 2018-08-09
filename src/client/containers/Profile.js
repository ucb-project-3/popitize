import React from 'react';
import { CardMedia, Card, Paper, Typography } from '@material-ui/core';
import { connectProfile } from '../util/connects';
import ProfilePic from '../imgs/cat.jpg';


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
    const { user } = this.props;
    return (
      <Paper
        elevation={5}
        style={{
          display: 'flex',
          flexFlow: window.innerWidth > 600 ? 'row nowrap' : 'column nowrap',
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
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '6rem',
          }}
        >
          <Typography
            variant="headline"
            component="h1"
            style={{
              fontSize: '4rem'
            }}
          >
            {
              user.first_name && user.last_name ?
                `${user.first_name} ${user.last_name}`
              :
                'user not found'
            }
          </Typography>
          <Typography
            variant="subheading"
            component="h2"
            style={{
              fontSize: '1.5rem'
            }}
          >
            {user.email || 'noemail@email.com'}
          </Typography>
          <Typography
            variant="subheading"
            component="h2"
            style={{
              fontSize: '1rem'
            }}
          >
            No Renter or Host info :/
          </Typography>
        </div>
      </Paper>
    );
  }
}

// this all wasnt working because the wrong components were being imported
// and the wrong props were being pased to the select

export default connectProfile(Profile);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Host from '../containers/Hosts';
const placeHolder = 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjlyfu3td_cAhVRJDQIHc5SDaYQjRx6BAgBEAU&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F49846842%2Fi-need-two-elements-to-switch-places-via-css&psig=AOvVaw0-ofNr64KZ-xgB_AFSTrF3&ust=1533885104624824'

const styles = {
  // card: {
  //   maxWidth: 345,
  //   margin: 'auto',
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const HostCard = (props) => {
  const { classes } = props;
  const modalData = props;
  const origin = (
    window.location.origin === 'http://localhost:3000' ?
      'http://localhost:8080'
      :
      window.location.origin
  );
  // delete modalData.openModal;
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image_url ? (origin + props.image_url) : placeHolder}
          title={props.popup_description}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.popup_description}
          </Typography>
          <Typography component="p">
            {props.popup_category}
          </Typography>
          <Typography component="p">
            {props.s_address_1}
          </Typography>
          <Typography component="p">
            {props.s_address_2}
          </Typography>
          <Typography component="p">
            {props.s_city}
          </Typography>
          <Typography component="p">
            {props.s_state}
          </Typography>
          <Typography component="p">
            {props.total_store_width * props.total_store_length} sqft
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => props.openModal(modalData)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

// SimpleMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
//   s_city: PropTypes.string.isRequired,
// };

export default withStyles(styles)(HostCard);


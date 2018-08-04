import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const SimpleMediaCard = (props) => {
  const { classes } = props;
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://www.thesprucepets.com/thmb/n25vOYrJ9ntY6WJXEMsOEuccxo4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-605382633-58b1dc925f9b5860463bf7d0.jpg"
          title="Charming Pop Up Space"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.s_address_1}
          </Typography>
          <Typography component="p">
            {props.s_city}
          </Typography>
          <Typography component="p">
            {props.s_state}
          </Typography>
          <Typography component="p">
            square feet: {props.total_store_width * props.total_store_length} sqft
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);

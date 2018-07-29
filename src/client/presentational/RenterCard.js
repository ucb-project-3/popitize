import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class RenterCard extends React.Component {
    state = {
      value: 1,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
      return (
        <div>
          <SelectField
            floatingLabelText="Frequency"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Address" />
            <MenuItem value={2} primaryText="Size" />
            <MenuItem value={3} primaryText="Dates" />
            <MenuItem value={4} primaryText="Category" />
          </SelectField>

        </div>
      );
    }
}

export default withStyles(styles)(RenterCard);

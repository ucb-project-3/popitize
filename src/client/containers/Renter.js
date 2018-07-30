import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

// ctrl+click for docs/demos:
// https://material-ui.com/demos/selects/
// https://material-ui.com/api/menu-item/#menuitem
// https://material-ui.com/api/select/#select
// https://material-ui.com/api/form-control/#formcontrol

// ** @material-ui/core is where the component library lives
// do not use simply 'material-ui' as that is not the official material ui lib


class Renter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      // select should be a string for this use case
    };
  }

    handleChange = (event) => {
      event.target.blur();
      this.setState({ value: event.target.value });
    }
    // event.target.value is what we want to set state to

    render() {
      return (
        <div>
          <FormControl>
            <InputLabel htmlFor="filter-select-one">
              {/* // implement a label through the use of Form control and input label */}
              label
            </InputLabel>
            <Select
            // Select was the component you were looking for
              autoWidth
              inputProps={{
                name: 'filter-select-one',
                id: 'filter-select-one'
                // needs an id for the label to latch on to
            }}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <MenuItem value="">
                {/* value is empty before user picks an option */}
                <em>none</em>
              </MenuItem>
              {/* the text inside of the tags is what gets displayed in the menu
                  ...but the value is the data we get from onChange */}
              <MenuItem value="item1">item1</MenuItem>
              <MenuItem value="item2">item2</MenuItem>
              <MenuItem value="item3">item3</MenuItem>
              <MenuItem value="item4">item4</MenuItem>
            </Select>
          </FormControl>
        </div>
      );
    }
}

// this all wasnt working because the wrong components were being imported
// and the wrong props were being pased to the select

export default Renter;

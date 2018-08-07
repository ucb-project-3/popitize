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
      // value: '',
      searchValue: '',
      searchCategory: ''
      // select should be a string for this use case
    };
  }

    //

    handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      const { value, name } = event.target;

      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = () => {
      alert(`${this.state.searchValue  } ${  this.state.searchCategory}`);
    };
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
              // autoWidth
              inputProps={{
                name: 'searchCategory',
                id: 'filter-select-one'
                // needs an id for the label to latch on to
            }}
              value={this.state.searchCategory}
              onChange={this.handleInputChange}
            >
              <MenuItem value="">
                {/* value is empty before user picks an option */}
                <em>none</em>
              </MenuItem>
              {/* the text inside of the tags is what gets displayed in the menu
                  ...but the value is the data we get from onChange */}
              <MenuItem value="item1">Address</MenuItem>
              <MenuItem value="item2">Size</MenuItem>
              <MenuItem value="item3">Dates</MenuItem>
              <MenuItem value="item4">Category</MenuItem>
            </Select>
          </FormControl>

          <input
            name="searchValue"
            value={this.state.searchValue}
            onChange={event => this.handleInputChange(event)}
          />
          {this.state.searchValue}
          {this.state.searchCategory}

          <button
            onClick={this.handleFormSubmit}
          />
        </div>
      );
    }
}

// this all wasnt working because the wrong components were being imported
// and the wrong props were being pased to the select

export default Renter;

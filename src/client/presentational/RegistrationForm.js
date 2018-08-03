import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';


const RegistrationForm = props => (

  <div id="reg-form-container">
    <form onSubmit={props.handleSubmit} id="reg-form">
      <div>
        <TextField
          required
          name="total_store_length"
          placeholder="length of the store"
          type="number"
          step=".01"
          value={props.inputs.total_score_length}
          id="total_score_length-input"
          onChange={event => props.handleInput(event, 'total_score_length')}
        />
        <TextField
          required
          name="total_store_width"
          placeholder="width of the store"
          id="total_store_width-input"
          type="number"
          step=".01"
          value={props.inputs.total_store_width}
          onChange={event => props.handleInput(event, 'total_store_width')}
        />

        <TextField
          required
          label="address 1"
          name="s_address_1"
          placeholder="seller address"
          value={props.inputs.s_address_1}
          id="s_address_1-input"
          type="text"
          onChange={event => props.handleInput(event, 's_address_1')}
        />
        <TextField
          required
          name="s_city"
          placeholder="seller city"
          value={props.inputs.s_city}
          id="s_city-input"
          type="text"
          onChange={event => props.handleInput(event, 's_city')}
        />

        <TextField
          required
          name="s_state"
          placeholder="seller state"
          value={props.inputs.s_state}
          id="s_state-input"
          type="text"
          onChange={event => props.handleInput(event, 's_state')}
        />

        <TextField
          required
          name="s_zip"
          placeholder="zipcode"
          value={props.inputs.s_zip}
          id="s_zip-input"
          type="number"
          onChange={event => props.handleInput(event, 's_zip')}
        />

        <TextField
          name="s_address_2"
          placeholder="seller address 2"
          value={props.inputs.s_address_2}
          id="address_2-input"
          type="text"
          onChange={event => props.handleInput(event, 'address_2')}
        />

        <TextField
          required
          name="rental_rate"
          placeholder="rental_rate"
          value={props.inputs.rental_rate}
          id="rental_rate-input"
          type="number"
          onChange={event => props.handleInput(event, 'rental_rate')}
        />

      </div>
      <div style={{ display: 'flex', flexFlow: 'row-reverse', marginTop: '1rem' }}>
        <Button
          type="submit"
          onSubmit={props.handleSubmit}
          color="secondary" 
          style={{right: '0.5em',
          margin: '0.5em',
          marginBottom: '0em',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          fontWeight: 'bolder',
          height: '48',
          padding: '0 30px',
          color: 'white',}}
        >
        Register
        </Button>
      </div>
    </form>
  </div>
);

RegistrationForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;

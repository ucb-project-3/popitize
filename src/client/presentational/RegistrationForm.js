import React, { Fragment } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';


const RegistrationForm = props => (

  <div id="reg-form-container">
    <form onSubmit={props.handleSubmit} id="reg-form">
      <div
        style={{
          width: 'fit-content !important',
          margin: 'auto',
        }}
      >
        {/* host form */}
        {
          !props.switchOn ?
            (!props.accounts.host ?
              <Typography
                variant="headline"
                align="center"
              >
                Already signed up to be a host!
              </Typography>
              :
              <Fragment>
                <TextField
                  required
                  name="total_store_length"
                  label="Rental length"
                  type="number"
                  value={props.inputs.total_store_length}
                  id="total_score_length-input"
                  onChange={event => props.handleInput(event, 'total_store_length')}
                />
                <TextField
                  required
                  name="total_store_width"
                  label="Rental Width"
                  id="total_store_width-input"
                  type="number"
                  value={props.inputs.total_store_width}
                  onChange={event => props.handleInput(event, 'total_store_width')}
                />

                <TextField
                  required
                  name="s_address_1"
                  label="address"
                  value={props.inputs.s_address_1}
                  id="s_address_1-input"
                  type="text"
                  onChange={event => props.handleInput(event, 's_address_1')}
                />
                <TextField
                  required
                  name="s_city"
                  label="city"
                  value={props.inputs.s_city}
                  id="s_city-input"
                  type="text"
                  onChange={event => props.handleInput(event, 's_city')}
                />
                <TextField
                  required
                  name="s_state"
                  label="state"
                  value={props.inputs.s_state}
                  id="s_state-input"
                  type="text"
                  onChange={event => props.handleInput(event, 's_state')}
                />
                <TextField
                  required
                  name="s_zip"
                  label="zipcode"
                  value={props.inputs.s_zip}
                  id="s_zip-input"
                  type="number"
                  onChange={event => props.handleInput(event, 's_zip')}
                />
                <TextField
                  name="s_address_2"
                  label="address 2"
                  value={props.inputs.s_address_2}
                  id="address_2-input"
                  type="text"
                  onChange={event => props.handleInput(event, 'address_2')}
                />
                <TextField
                  required
                  name="rental_rate"
                  label="rental rate"
                  value={props.inputs.rental_rate}
                  id="rental_rate-input"
                  type="number"
                  onChange={event => props.handleInput(event, 'rental_rate')}
                />
                <div
                  style={{
                    // display: `${((!props.switchOn && !props.accounts.host)
                    //  || (props.switchOn && !props.accounts.renter))
                    //  ? 'flex' : 'none'}`,
                    flexFlow: 'row-reverse',
                    marginTop: '1rem'
                  }}
                >
                  <Button
                    type="submit"
                    onSubmit={props.handleSubmit}
                    color="secondary"
                    style={{
                    right: '0.5em',
                    margin: '0.5em',
                    marginBottom: '0em',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    fontWeight: 'bolder',
                    height: '48',
                    padding: '0 30px',
                    color: 'white',
                  }}
                  >
                    Register
                  </Button>
                </div>
              </Fragment>
            )
            :
              <Fragment>
                <Button
                  type="submit"
                  onSubmit={props.handleSubmit}
                  color="secondary"
                  style={{
                    right: '0.5em',
                    margin: '0.5em',
                    marginBottom: '0em',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    fontWeight: 'bolder',
                    height: '48',
                    padding: '0 30px',
                    color: 'white',
                  }}
                >
                    Register
                </Button>
              </Fragment>
        }

      </div>
    </form>
  </div>
);

RegistrationForm.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputs: PropTypes.object.isRequired,
};

export default RegistrationForm;

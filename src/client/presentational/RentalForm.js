import React from 'react';
import PropTypes from 'prop-types';
import { Card, TextField, CardContent, Button, Typography, CardHeader } from '@material-ui/core';

const RentalForm = props => (
  <form
    onSubmit={props.handleSubmit}
    style={{
      height: '100%',
      width: '100%',
    }}
  >
    <Card
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <CardHeader
        title="Rental Agreement"
        titleTypographyProps={{
          variant: 'headline',
          align: 'center',
        }}
      />
      <CardContent>
        <div>
          <div
            style={{
              display: 'flex',
              flexFlow: 'row nowrap'
            }}
          >

            <div
              style={{
              display: 'flex',
              flexFlow: 'column nowrap',
              width: '50%',
            }}
            >
              <TextField
                required
                label="popup name"
                id="popup-name-input"
                name="popup_name"
                value={props.inputs.popup_name}
                placeholder="pop and lock"
                helperText="Something short and sweet"
                type="text"
                onChange={event => props.handleInput(event, 'popup_name')}
              />
              <TextField
                required
                label="popup description"
                id="popup-description-input"
                name="popup_description"
                value={props.inputs.popup_description}
                placeholder="cars, or cats, or whatever"
                helperText="So, what is it you do again?"
                multiline
                type="text"
                onChange={event => props.handleInput(event, 'popup_description')}
              />
            </div>
            <div
              style={{
              display: 'flex',
              flexFlow: 'column nowrap',
              // justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
            }}
            >
              <Typography
                variant="caption"
                align="center"
              >
                Date Range
              </Typography>
              <div
                style={{
                  display: 'inline-block',
                  height: '1rem',
                }}
              />
              {props.calendar()}
            </div>
          </div>
        </div>
        <Button type="submit">
          Rent
        </Button>
      </CardContent>
      <CardContent>
        <Typography
          variant="subheading"
        >
          Almost there...
        </Typography>
      </CardContent>
    </Card>
  </form>
);

RentalForm.propTypes = {
  inputs: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  calendar: PropTypes.func.isRequired,
};

export default RentalForm;

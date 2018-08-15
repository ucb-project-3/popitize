import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';
import { FormControlLabel, FormGroup, Checkbox, Card, TextField, CardContent, Button, Typography, CardHeader } from '@material-ui/core';

const RentalForm = (props) => {
  const { theme } = props;
  const { primary, secondary } = theme.palette;
  console.log('primary', primary);
  return (
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
            variant: 'button',
            align: 'center',
            color: 'primary',
            style: {
              color: primary.contrastText,
              borderBottom: `solid 2px ${primary.main}`,
            }
          }}
          style={{
            background: `${secondary.main}`,
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
        </CardContent>
        <CardContent>
          <Typography
            variant="subheading"
          >
          Almost there...
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="body1"
          >
            {/* <!-- start slipsum code --> */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <br />
          <Typography
            variant="body1"
          >
            {/* <!-- start slipsum code --> */}
            Mi tempus imperdiet nulla malesuada. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Vel fringilla est ullamcorper eget nulla facilisi. Condimentum lacinia quis vel eros donec ac. Morbi enim nunc faucibus a pellentesque. Sed vulputate odio ut enim blandit volutpat maecenas. In massa tempor nec feugiat nisl pretium fusce. Ultrices in iaculis nunc sed augue lacus. Odio pellentesque diam volutpat commodo sed. Cursus eget nunc scelerisque viverra mauris in. Egestas erat imperdiet sed euismod. Bibendum enim facilisis gravida neque convallis. Commodo quis imperdiet massa tincidunt nunc pulvinar. Sapien nec sagittis aliquam malesuada.
          </Typography>
        </CardContent>
        <CardContent
          style={{
            justifySelf: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexFlow: 'row-reverse nowrap',
              justifyContent: 'space-between'
            }}
          >
            <Button type="submit" color="secondary">
          Rent
            </Button>
            <FormGroup>
              <FormControlLabel
                label="I agree to the terms and conditions"
                control={
                  <Checkbox
                    checked={props.agree}
                    onChange={props.handleAgree}
                  />
                }
              />
            </FormGroup>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

RentalForm.propTypes = {
  inputs: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  calendar: PropTypes.func.isRequired,
};

export default withTheme()(RentalForm);

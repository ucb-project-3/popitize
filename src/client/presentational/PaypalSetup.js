import React from 'react';
import PaypalButton from './PaypalSetup';


const CLIENT = 'AVUtgxw6bYEWOnnL2gK6dzVAncuEF0fl-KnTy9jXbVv2PEhdAO-CB_aIGgml_tRIq8a5ukzNLfA8J-sd';
//   production: 'AVUtgxw6bYEWOnnL2gK6dzVAncuEF0fl-KnTy9jXbVv2PEhdAO-CB_aIGgml_tRIq8a5ukzNLfA8J-sd',
// };

const ENV = process.env.NODE_ENV === 'development'
  ? 'development'
  : 'sandbox';

class PaypalSetup extends React.Component {
  render() {
    const onSuccess = payment =>
      console.log('Successful payment!', payment);

    const onError = error =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = data =>
      console.log('Cancelled payment!', data);

    return (
      <div>
        <PaypalButton
          client={CLIENT}
          env={ENV}
          {console.log("Test")}
          commit
          currency="USD"
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}
export default PaypalSetup;

import React from 'react';

const CLIENT = {
  sandbox: 'xxxXXX',
  production: 'xxxXXX',
};

const ENV = process.env.NODE_ENV === 'development'
  ? 'production'
  : 'sandbox';

class PaypalButton extends React.Component {
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
export default PaypalButton;

import React, { Fragment } from 'react';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import PaymentForm from '../../components/paymentForm/PaymentForm';

function Payment() {
  return (
    <Fragment>
      <LogoHeader />
      <PaymentForm />
    </Fragment>
  );
}

export default Payment;

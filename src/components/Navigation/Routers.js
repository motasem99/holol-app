import React, { Fragment } from 'react';
import Home from '../../pages/Home/Home';
import Payment from '../../pages/Payment/Payment';

import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
const Routers = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Routes location={location} key={location.pathname}>
        <Route path='/' exact element={<Home />} />
        <Route path='/payment' exact element={<Payment />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Fragment>
  );
};

export default Routers;

import React, { Fragment } from 'react';
import InfoForm from '../../components/InfoForm/InfoForm';
import LogoHeader from '../../components/LogoHeader/LogoHeader';

function Home() {
  return (
    <Fragment>
      <LogoHeader />

      <div className='flex justify-center mt-8'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/holol-tec.appspot.com/o/taqset.jpg?alt=media&token=2b165630-cc75-42f5-9a23-e2d730ef5451'
          alt='img'
          className='w-96'
        />
      </div>

      <InfoForm />
    </Fragment>
  );
}

export default Home;

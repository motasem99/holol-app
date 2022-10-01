import React from 'react';

function LogoHeader() {
  return (
    <div className='pt-8 md:flex justify-between w-full md:w-3/6 m-auto items-center'>
      <div className='items-center w-full justify-center flex'>
        <img
          src='https://www.findsaudi.com/PubFiles/ItemFiles/3087/image_3087_ar.jpg?width=224&height=167'
          alt='img'
        />
      </div>
      <div className='items-center w-full justify-center flex'>
        <h1 className='text-4xl'>متجر حلول التقنية </h1>
      </div>
    </div>
  );
}

export default LogoHeader;

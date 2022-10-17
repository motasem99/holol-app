import React, { useState, useRef } from 'react';
import ModelCode from '../ModalCode/ModalCode';
import emailjs from '@emailjs/browser';

const PaymentForm = () => {
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const sendData = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j9l91kq',
        'template_0yzq5xn',
        form.current,
        'rVoGRNPumiJyY5YUb'
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShowModal(true);
    e.target.reset();
  };

  return (
    <div className=' p-8'>
      <div className='relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto'>
        <form
          className='bg-white px-8 pt-8 pb-6 rounded-b shadow-lg'
          ref={form}
          onSubmit={sendData}
        >
          <ul className='flex justify-center my-8'>
            <li className='mx-2'>
              <img
                className='w-16'
                src='https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png'
                alt=''
              />
            </li>
            <li className='mx-2'>
              <img
                className='w-14'
                src='https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png'
                alt=''
              />
            </li>
            <li className='ml-5'>
              <img
                className='w-7'
                src='https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png'
                alt=''
              />
            </li>
          </ul>

          <div className='text-center m-4'>
            <h4 className='text-lg font-medium text-gray-800'>Card payment</h4>
          </div>

          <div className='space-y-4'>
            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='cardName'
              >
                Name on Card <span className='text-red-500'>*</span>
              </label>
              <input
                id='cardName'
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='text'
                required
                name='cardName'
                placeholder='John Doe'
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium mb-1'
                htmlFor='cardNumber'
              >
                Card Number <span className='text-red-500'>*</span>
              </label>
              <input
                id='cardNumber'
                name='cardNumber'
                required
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='text'
                maxlength='16'
                placeholder='1234 1234 1234 1234'
              />
            </div>
            <div className='flex space-x-4'>
              <div className='flex-1'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='year'
                >
                  Year <span className='text-red-500'>*</span>
                </label>
                <input
                  id='year'
                  name='year'
                  required
                  className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                  type='number'
                  placeholder='Year'
                />
              </div>

              <div className='flex-1'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='month'
                >
                  Month <span className='text-red-500'>*</span>
                </label>
                <input
                  id='month'
                  name='month'
                  required
                  className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                  type='number'
                  placeholder='Month'
                />
              </div>

              <div className='flex-1'>
                <label
                  className='block text-sm font-medium mb-1'
                  htmlFor='cardCCV'
                >
                  CCV <span className='text-red-500'>*</span>
                </label>
                <input
                  id='cardCCV'
                  name='cardCCV'
                  required
                  className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                  type='number'
                  placeholder='CCV'
                />
              </div>
            </div>
          </div>
          <div className='mt-6'>
            <div className='mb-4'>
              <button className='font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2'>
                Pay
              </button>
            </div>
          </div>
        </form>
      </div>

      {showModal && <ModelCode setShowModal={setShowModal} />}
    </div>
  );
};

export default PaymentForm;

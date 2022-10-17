import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function InfoForm() {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j9l91kq',
        'template_n7t95uk',
        form.current,
        'rVoGRNPumiJyY5YUb'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          navigate('payment');
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    navigate('payment');
  };

  return (
    <div className='p-8'>
      <div className='relative lg:px-8 pb-8 max-w-lg mx-auto'>
        <form
          className='bg-white px-2 pt-8 pb-6 rounded-b shadow-lg'
          ref={form}
          onSubmit={sendEmail}
        >
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>
                مواصفات المنتج المطلوب <span className='text-red-500'>*</span>
              </label>
              <input
                id='infoItem'
                required
                name='infoItem'
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='text'
              />
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>
                اسم المشتري <span className='text-red-500'>*</span>
              </label>
              <input
                id='sealerName'
                required
                name='sealerName'
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='text'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>
                العنوان <span className='text-red-500'>*</span>
              </label>
              <input
                id='address'
                required
                name='address'
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='text'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>
                البريد الالكتروني <span className='text-red-500'>*</span>
              </label>
              <input
                id='email'
                required
                name='email'
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='email'
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-1'>
                رقم التواصل <span className='text-red-500'>*</span>
              </label>
              <input
                id='phoneNumber'
                required
                name='phoneNumber'
                className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                type='number'
              />
            </div>
          </div>
          <div className='mt-6'>
            <div className='mb-4'>
              <button className='font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2'>
                ارسال
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InfoForm;

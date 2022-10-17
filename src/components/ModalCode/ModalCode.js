import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function ModelCode({ setShowModal }) {
  const form = useRef();
  const navigate = useNavigate();

  const sendCode = (e) => {
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
          setShowModal(false);
          e.target.reset();
          navigate('/');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div
        className='fixed inset-0 w-full h-full bg-black opacity-40'
        onClick={() => setShowModal(false)}
      ></div>
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
          <div className='mt-3'>
            <div className='flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-green-600'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='mt-2 text-center'>
              <h4 className='text-lg font-medium text-gray-800'>
                الرجاء ادخال رمز التاكيد الذي تم ارساله الى هاتفك
              </h4>

              <form
                className='bg-white px-8 pt-8 pb-6'
                ref={form}
                onSubmit={sendCode}
              >
                <div>
                  <label
                    className='block text-sm font-medium mb-1'
                    htmlFor='code'
                  >
                    ادخل الرمز <span className='text-red-500'>*</span>
                  </label>
                  <input
                    id='code'
                    className='text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full'
                    type='text'
                    required
                    name='code'
                  />
                </div>

                <div className='mt-6'>
                  <div className='mb-4'>
                    <button className='font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2'>
                      تأكيد
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCode;

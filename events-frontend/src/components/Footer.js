import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-red-300 via-indigo-200 to-red-300 p-3 mt-12 flex flex-row-reverse'>
        <p className='text-white text-xs'>Monara 2022. Made with <a className='underline' href='https://open-api.myhelsinki.fi/' target='_blank' rel='noreferrer'>MyHelsinki Open API</a></p>
    </div>
  )
}

export default Footer;
import React from 'react';

const Place = ({name}) => {
  return (
    <div className='py-10'>
        <h1 className='text-indigo-900 text-2xl font-bold'>{name}</h1>
    </div>
  )
}

export default Place;
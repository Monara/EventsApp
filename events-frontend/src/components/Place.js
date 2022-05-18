import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Place = ({name}) => {
  return (
    <div className='py-10 text-indigo-900 '>
        <h1 className='text-2xl font-bold cursor-pointer hover:text-indigo-400'>{name} &nbsp;<FontAwesomeIcon onClick={()=>{}} className='text-sm' icon={faCaretDown} /></h1>
    </div>
  )
}

export default Place;
/**TODO add some info with a click: address, etc */
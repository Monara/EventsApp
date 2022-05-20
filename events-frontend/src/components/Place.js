import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Hours = ({data, day}) => {

  //entries example [mon, '10.00-18.00']. getDay() day of week returned as 0 sun, 1, mon, etc. Bolden current day
  const items = Object.entries(data).map((item, i) =>  i+1 === day || i-6 === day ? <li key={i}><b>{item[0]}: {item[1]}</b></li> : <li key={i}>{item[0]}: {item[1]}</li>);

  return (
    <ul className='my-2 capitalize text-sm'>
      {items}
    </ul>
  )
}

const Place = ({name, address, hours, prices}) => {

  const [showAbout, setShowAbout] = useState(false);
  const day = new Date().getDay();

  return (
    <div className='p-[5%] py-10 text-indigo-900'>
      <div onClick={() => setShowAbout(!showAbout)} className='hover:text-indigo-700'>
        <h1 className='text-2xl font-bold cursor-pointer'>{name} &nbsp;
        {showAbout ?
          <FontAwesomeIcon className='text-sm hover:scale-150' icon={faCaretUp} /> 
          : 
          <FontAwesomeIcon className='text-sm hover:scale-150' icon={faCaretDown} />
        }
        </h1>
      </div>
        {showAbout ?
        <div className='mt-2 text-sm'>
          <p>{address}</p>
          <Hours data={hours} day={day} />
          <p>Entrance fee: {prices}</p>
        </div> 
        : '' }
    </div>
  )
}

export default Place;
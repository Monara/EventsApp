import React, {useState, useEffect} from 'react';
import {EventItem, EventItemEmpty}  from './EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Events = ({eventType, coord}) => {

    const [eventData, setEventData] = useState('');
    const [eventI, setEventI] = useState([0, 1, 2]); //TODO this won't work on all screens, rework later to show a number of events based on screen size (1-3)
    const url = `http://localhost:3001/api/${eventType}/${coord.lat}/${coord.lon}/${coord.range}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setEventData(data))
        .catch((error) => console.log(error))
    }, [url]); 

    /**TODO tidy up below. remove carets when all events showing */
  return (
    <div className=''>
      <div className='flex flex-row flex-nowrap items-center'>
          {eventData.length > 0 ? 
          <>
            <FontAwesomeIcon onClick={()=>{
              if (eventI[0] > 0) {
                setEventI(eventI.map(i => --i));
              }
            }} className='text-3xl text-indigo-200 cursor-pointer' icon={faCaretLeft} />
            {eventI.map((item) => <EventItem data={eventData[item]} key={item} />)}
            <FontAwesomeIcon onClick={()=> {
              if (eventData.length-1 > eventI[eventI.length-1]) {
                setEventI(eventI.map(i => ++i));
              }
            }} className='text-3xl text-indigo-200 cursor-pointer' icon={faCaretRight} />
          </>
           : 
          <EventItemEmpty />}
      </div>
    </div>
  )
}

export default Events;
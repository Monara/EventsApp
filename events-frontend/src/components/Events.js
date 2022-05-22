import React, {useState, useEffect} from 'react';
import {EventItemEmpty}  from './EventItem';
import Carousel from './Carousel';


const Events = ({eventType, coord}) => { /**gets event data and makes a carousel gallery or empty event card */

    const [eventData, setEventData] = useState('');
    const url = `http://localhost:3001/api/${eventType}/${coord.lat}/${coord.lon}/${coord.range}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setEventData(data))
        .catch((error) => console.log(error))
    }, [url]); 

  return (
    <>
      {eventData.length > 0 ? 
        <Carousel data={eventData} />
        : 
        <EventItemEmpty /> //TODO fix the empty event layout later
      }
    </>
  )
}

export default Events;
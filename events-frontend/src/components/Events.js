import React, {useState, useEffect} from 'react';
import {EventItemEmpty}  from './EventItem';
import Carousel from './Carousel';


const Events = ({eventType, coord}) => { /**gets event data and makes a carousel gallery or empty event */

    const [eventData, setEventData] = useState('');
    const url = `http://localhost:3001/api/${eventType}/${coord.lat}/${coord.lon}/${coord.range}`; //use actual link for heroku

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setEventData(data))
        .catch((error) => console.log(error))
    }, []); 

  return (
    <>
      {eventData.length > 0 ? 
        <Carousel data={eventData} />
        : 
        <EventItemEmpty />
      }
    </>
  )
}

export default Events;
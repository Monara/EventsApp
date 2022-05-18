import React, {useState, useEffect} from 'react';
import EventItem from './EventItem';

const Events = ({eventType, coord}) => {

    const [eventData, setEventData] = useState('');
    const url = `http://localhost:3001/api/${eventType}/${coord.lat}/${coord.lon}/${coord.range}`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setEventData(data))
        .catch((error) => console.log(error))
    }, [url]); 


  return (
    <div className='flex flex-row flex-wrap'>
        {eventData.length > 0 ? 
        eventData.map((item, i) => <EventItem data={item} key={i}/>) : <p>No upcoming events</p>}
    </div>
  )
}

export default Events;
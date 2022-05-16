import React from 'react';
import './EventItem.css';
import {format} from 'date-fns';

const EventItem = ({data}) => {

  const img = data.description.images[0].url;
  return (
    <div>
        <h2>{data.name.en}</h2>
        <p>{data.event_dates.starting_day} - {data.event_dates.ending_day}</p>
        <p>{data.description.intro}</p>
        <img src={img} className='eventImg' alt=''/>
    </div>
  )
}

export default EventItem;
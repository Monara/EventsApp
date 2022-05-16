import React from 'react';
import {format} from 'date-fns';

const EventItem = ({data}) => {

  const img = data.description.images[0].url;
  return (
    <div className='w-1/4'>
        <p className='text-lg font-sans font-semibold'>{data.name.en}</p>
        <p className='text-sm font-sans text-indigo-500 '>{data.event_dates.starting_day} - {data.event_dates.ending_day}</p>
        <p className='text-base font-sans'>{data.description.intro}</p>
        <img src={img} className='rounded-lg' alt=''/>
    </div>
  )
}

export default EventItem;
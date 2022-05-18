import React from 'react';

const EventItem = ({data}) => {

  const formatDate = (starting, ending) => {

    let opt1, opt2 = {};
    let start = new Date(starting);
    let end = new Date(ending);
    let timeString = false;

    if (start.getYear() !== end.getYear()) { //Years differ: 21 Sept 2022-26 Feb 2023
      opt1 = opt2 = { year: 'numeric', month: 'short', day: 'numeric'};
    }

    else if (start.getMonth() !== end.getMonth()) { //same year, different month: 2 Apr-21 Aug 2022
      opt1 = { month: 'short', day: 'numeric'};
      opt2 = { month: 'short', day: 'numeric', year: 'numeric'};
    }

    else if (start.getDate() !== end.getDate()) { //same month, different day: 1-22 Jun 2022
      opt1 = {day: 'numeric'};
      opt2 = {month: 'short', day: 'numeric', year: 'numeric'};
    }

    else {
      opt1 = {weekday: 'long', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
      opt2 = {hour: 'numeric', minute: 'numeric'};
      timeString = true; //don't add d/m/y if same day: Thursday, 19 May, 17:00-19:30
    }

    return [start.toLocaleDateString('en-GB', opt1), timeString? end.toLocaleTimeString('en-GB', opt2) : end.toLocaleDateString('en-GB', opt2)];
  }

  const img = data.description.images[0].url;
  const dates = formatDate(data.event_dates.starting_day, data.event_dates.ending_day);

  return (
    <div className='w-1/4 bg-white shadow hover:shadow-md m-10'>
        <img src={img} className='border-b' alt=''/>
        <div className='space-y-1 mx-5 py-5'>
          <p className='text-base font-sans font-semibold text-indigo-800'>{data.name.en}</p>
          <p className='text-sm font-sans text-indigo-600'>{dates[0]}-{dates[1]}</p>
          <p className='text-sm font-sans text-slate-800'>{data.description.intro}</p>
          {/*{data.info_url && <p className='text-sm text-slate-800'>{data.info_url}</p>} add link somewhere later*/}
        </div>
    </div>
  )
}

export default EventItem;
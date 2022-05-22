import React, {useState} from 'react';
import parse from 'html-react-parser';
//import closed from './closed.jpg'; //https://unsplash.com/photos/E1SID6pKht8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
  

const EventItemEmpty = () => {

  return (
    <>
  {/*<div className='h-80 bg-white shadow hover:shadow-md my-5 ml-16 flex flex-column' style={{backgroundImage: `url(${closed})`, backgroundPosition: 'center',  backgroundSize: 'cover', width: `20%`}}>
    <div className='w-full space-y-1 px-5 py-5 bg-white opacity-90 place-self-end max-h-80 overflow-y-auto'> */}
      <p className='text-base font-sans font-semibold text-slate-900 ml-12'>No upcoming events</p>
    {/*</div>
  </div>*/}
  </>
  )
}

const EventItem = ({data, width}) => {

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

  const img = data.description.images[0].url.toString(); //toString() for path
  const dates = formatDate(data.event_dates.starting_day, data.event_dates.ending_day);
  const [showDesc, setShowDesc] = useState(false);

  const leftToRight = {
    initial: {
      x: '-100vw',
    },
    animate: {
      x: '0',
      transition: { duration: 0.25 },
    },
  }

  return (
 
  <div className='h-80 flex flex-row' style={{ width: `${width}%`}}>
    <div className='flex w-full m-[5%] shadow hover:shadow-md' style={{backgroundImage: `url(${img})`, backgroundPosition: 'center',  backgroundSize: 'cover'}}>
      <div className='w-full space-y-1 px-5 pt-5 bg-white opacity-90 max-h-80 overflow-y-auto overflow-x-clip place-self-end'>
        {showDesc ?
          <motion.div variants={leftToRight} initial='initial' animate='animate'>
            <div className='text-sm text-slate-900'>{parse(data.description.body)}</div>
            <div className='sticky bottom-0 pb-5 pt-2 bg-white'>
              <button onClick={()=> setShowDesc(false)} className='bg-indigo-300 hover:bg-indigo-400 text-white text-sm font-bold py-2 px-3 rounded mr-2'><FontAwesomeIcon icon={faLeftLong} /></button>
              {data.info_url && <a href={data.info_url} target='_blank' rel='noreferrer'><button className='bg-indigo-300 hover:bg-indigo-400 text-white text-sm font-bold py-2 px-2 rounded'>Website <FontAwesomeIcon icon={faUpRightFromSquare} /></button></a>}
            </div>
          </motion.div>
         :
          <div onClick={()=> setShowDesc(true)} className='cursor-pointer pb-5'>
            <p className='text-base font-sans font-semibold text-slate-900'>{data.name.en}</p>
            <p className='text-sm font-sans text-slate-600'>{dates[0]}-{dates[1]}</p>
          </div>
        }
      </div>
    </div>
  </div> 
  )
}

export { EventItem, EventItemEmpty};
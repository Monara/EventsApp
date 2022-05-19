import React, {useState, useEffect} from 'react';
import {EventItem, EventItemEmpty}  from './EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Caret = ({icon, callback, hide}) => {
  return ( //invisible placeholder so that the carousel doesn't shift when visible. 2xl === mx-6 === 1.5rem on empty event
    hide ? <FontAwesomeIcon className='text-2xl invisible' icon={icon} /> : <FontAwesomeIcon onClick={callback} className='text-2xl text-indigo-200 cursor-pointer' icon={icon} />
  )
}

const Carousel = ({data, row}) => {

  const getIndexes = (dataL, rowL) => {
    let indexArray = [];
    for (let i=0; i<rowL; i++) {
      if (i < dataL) {
        indexArray = indexArray.concat(i);
      }
    }
    return indexArray;
  }

  const initial = getIndexes(data.length, row);
  const [eventI, setEventI] = useState(initial); //so how many elements in carousel determioned by row, or max number of events:  whichever is less
  const [hideArrows, setHideArrows] = useState({left: true, right: (data.length <= row)}); //whether to hide left/right carets. start from 0, so left is hidden

  const next = () => { //arrows press next: if enough data, increment all indexes, and make sure prev arrow is visible

    let arr = [...eventI];  //don't set states in conditionals! Copies here.
    let obj = {...hideArrows};

    if (data.length > arr[arr.length-1]) {
      arr = arr.map(i => ++i);
      obj.left = false;
    }
    if (data.length-1 === arr[arr.length-1]) obj.right = true;
    setEventI(arr);
    setHideArrows(obj);
  }

  const prev = () => { //arrows press prev: if not at zero index, decrement all indexes, and make sure next arrow is visible

    let arr = [...eventI];
    let obj = {...hideArrows};

    if (arr[0] > 0) {
      arr = arr.map(i => --i);
      obj.right = false;
    }
    if (arr[0] === 0) obj.left = true;
    setEventI(arr);
    setHideArrows(obj);
  }

  return (
    <>
    <Caret icon={faCaretLeft} callback={prev} hide={hideArrows.left}/>
    {eventI.map((item) => <EventItem data={data[item]} key={item} />)}
    <Caret icon={faCaretRight} callback={next} hide={hideArrows.right}/>
    </>
  )
}

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
    <div className=''>
      <div className='flex flex-row flex-nowrap items-center'>
          {eventData.length > 0 ? 
          <Carousel data={eventData} row={3} />
           : 
          <EventItemEmpty />}
      </div>
    </div>
  )
}

export default Events;
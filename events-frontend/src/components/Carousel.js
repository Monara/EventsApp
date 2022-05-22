import React, {useState, useEffect} from 'react';
import {EventItem}  from './EventItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Caret = ({icon, callback, hide}) => {
    return ( //invisible placeholder so that the carousel doesn't shift when visible
      hide ? <FontAwesomeIcon className='text-2xl invisible' icon={icon} /> : <FontAwesomeIcon onClick={callback} className='text-2xl text-indigo-300 cursor-pointer hover:text-indigo-400 hover:scale-150' icon={icon} />
    )
}

const Carousel = ({data}) => {

    //1. get screen width
    const [width, setWidth] = useState(window.innerWidth);
  
    //2. get row length based on width
    const setCount = () => {
      let count = 1;
      if (width >= 1280) count = 3;
      else if (width >= 768) count = 2; //breakpoints as in tailwindCSS
      return count;
    }

    //3. get initial event indexes based on row and data length
    const getIndexes = () => { //get event indexes for carousel, if enough events exist
        let indexArr = [];
        for (let i=0; i<row; i++) {
          if (i < data.length) indexArr = indexArr.concat(i);
        }
        return indexArr;
    }
    //4. change indexes when other variables are changed
    const changeIndexes = () => {
        let indexArr = [...eventI];
        let lastItem = eventI[eventI.length-1];

        if (eventI.length > row) indexArr.pop(); //if reducing shown events, pop off last

        else if (eventI.length < row) { //if to add more:
            
            if (lastItem < data.length-1) indexArr = indexArr.concat(++lastItem); //add next to end if not last
            else if (lastItem <= data.length-1 && data.length !== 1) { // if last event already showing
                indexArr.unshift(indexArr[0]-1);}
            //if only one event available, change nothing    
        };
        return indexArr;
    }

    //5. check if to hide gallery arrows
    const handleArrows = () => {
        let obj = {};
        if (eventI[eventI.length-1] === data.length-1) obj.right = true; else obj.right = false;
        if (eventI[0] === 0) obj.left = true; else obj.left = false;
        return obj;
    }
  
    const [row, setRow] = useState(setCount);
    const [eventI, setEventI] = useState(getIndexes);
    const [hideArrows, setHideArrows] = useState({});
  
    useEffect(() => { //only adding listener once, other effects separate
      window.addEventListener("resize",() => setWidth(window.innerWidth));
      return () => window.removeEventListener("resize",() => setWidth(window.innerWidth)); //clean up
    }, []);

    useEffect(()=> { //with each resizing
        setRow(setCount);
        setEventI(changeIndexes);
    }, [width]);

    useEffect(() => { //eventI can change with 1.resizing window or 2.arrow clicks
        setHideArrows(handleArrows);
    }, [eventI]);
    
    //NAVIGATION ARROWS
    const next = () => { //arrow press next: if enough data, increment all indexes
      let arr = [...eventI];
      if (data.length > arr[arr.length-1]) {
        arr = arr.map(i => ++i);
      }
      setEventI(arr);
      setHideArrows(handleArrows);
    }
  
    const prev = () => { //arrow press prev: if not at zero index, decrement all indexes
      let arr = [...eventI];
      if (arr[0] > 0) {
        arr = arr.map(i => --i);
      }
      setEventI(arr);
      setHideArrows(handleArrows);
    }
  
    return ( 
      <div className='flex flex-row items-center'>
        <Caret icon={faCaretLeft} callback={prev} hide={hideArrows.left} />
        {eventI.map((item) => <EventItem data={data[item]} key={item} width={100/row}/>)}
        <Caret icon={faCaretRight} callback={next} hide={hideArrows.right} />
      </div>
    )
  }

  export default Carousel;
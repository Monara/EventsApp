import React from 'react';

const Header = ({tab}) => {
  const [tab1, setTab1] = tab;
  return (
    <div className='bg-gradient-to-r from-indigo-400 via-red-300 to-indigo-300 p-3 flex flex-row gap-5 justify-between'>
    <h1 className='text-white ml-5'>HELSINKI.<span className='font-semibold'>EVENTS</span></h1>
        <ul className='text-white font-semibold uppercase flex flex-row gap-5 mr-5'>
          {tab1 ?
          <>
          <li onClick={()=>setTab1(true)} className='text-indigo-900 cursor-pointer'>art</li>
          <li onClick={()=>setTab1(false)} className='hover:text-indigo-900 cursor-pointer'>museums</li>
          </>
          :
          <>
          <li onClick={()=>setTab1(true)} className='hover:text-indigo-900 cursor-pointer'>art</li>
          <li onClick={()=>setTab1(false)} className='text-indigo-900 cursor-pointer'>museums</li>
          </>
          }
        </ul>
    </div>
  )
}

export default Header;
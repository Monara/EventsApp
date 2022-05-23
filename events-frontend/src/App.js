import React, {useState} from 'react';
import {ArtTab, MuseumTab} from './components/Tab';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  const [tab1, setTab1] = useState(true);

  //different content width based on screen size
  //avoiding tab info refetch with display toggles
  return (
    <div className='bg-indigo-50'>
      <Header tab={[tab1, setTab1]}/>
      <div className='flex flex-col items-center h-full'>
        <div className='2xl:w-9/12 xl:w-4/5 lg:w-10/12 md:w-10/12 sm:w-10/12 pb-10'>
          { tab1? 
          <>
          <div className='block'><ArtTab /></div>
          <div className='hidden'><MuseumTab/></div>
          </> : 
          <>
          <div className='hidden'><ArtTab /></div>
          <div className='block'><MuseumTab /></div>
          </> }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

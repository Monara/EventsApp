import React, {useState} from 'react';
import {ArtTab, MuseumTab} from './components/Tab';
import Header from './components/Header';



const App = () => {

  const [tab1, setTab1] = useState(true);

  //different content width based on screen size
  return (
    <div>
      <Header tab={[tab1, setTab1]}/>
      <div className='bg-indigo-50 flex flex-col items-center'>
        <div className='2xl:w-9/12 xl:w-4/5 lg:w-10/12 md:w-10/12 sm:w-10/12 pb-10'>
          { tab1? <ArtTab/> : <MuseumTab/> }
        </div>
      </div>
    </div>
  );
}

export default App;

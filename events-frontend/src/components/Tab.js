import React from 'react';
import './Tab.css';
import Place from './Place';
import Events from './Events';

const Tab = () => {
  return (
  <>
    <div className='art-tab'>
        <Place name='Amos Rex' />
        <Events eventType='exhibitions' coord={{lat: 60.170765, lon: 24.936496, range: 0.1 }} />
        <Place name='Ateneum' />
        <Events eventType='exhibitions' coord={{lat: 60.170289, lon: 24.944060, range: 0.1 }} />
        <Place name='Kiasma' />
        <Events eventType='exhibitions' coord={{lat: 60.172019, lon: 24.936645, range: 0.1 }} />
        <Place name='Sinebrychoff Art Museum' />
        <Events eventType='exhibitions' coord={{lat: 60.162600, lon: 24.932445, range: 0.1 }} />
    </div>
    <div className='museum-tab'>
      <Place name='Design Museum' />
      <Events eventType='exhibitions' coord={{lat: 60.163206, lon: 24.946383, range: 0.1 }} />
      <Place name='Museum of Photography' />
      <Events eventType='exhibitions' coord={{lat: 60.162139, lon: 24.905767, range: 0.1 }} />
      <Place name='Natural History Museum' />
      <Events eventType='exhibitions' coord={{lat: 60.171529, lon: 24.931260, range: 0.1 }} />
      <Place name='The National Museum of Finland' />
      <Events eventType='exhibitions' coord={{lat: 60.175078, lon: 24.931627, range: 0.1 }} />
    </div>
  </>
  )
}

export default Tab;
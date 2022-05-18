import React from 'react';
import Place from './Place';
import Events from './Events';

//for now getting events with coordinates: API doesn't support by name or address
//TODO perhaps rework for two separate tabs, esp for mobile

const Tab = () => {
  return (
  <>
    <div className='art-tab'>
        <Place name='AMOS REX' />
        <Events eventType='exhibitions' coord={{lat: 60.170765, lon: 24.936496, range: 0.1 }} />
        <Place name='ATENEUM' />
        <Events eventType='exhibitions' coord={{lat: 60.170289, lon: 24.944060, range: 0.1 }} />
        <Place name='KIASMA' />
        <Events eventType='exhibitions' coord={{lat: 60.172019, lon: 24.936645, range: 0.1 }} />
        <Place name='SINEBRYCHOFF ART MUSEUM' />
        <Events eventType='exhibitions' coord={{lat: 60.162600, lon: 24.932445, range: 0.1 }} />
    </div>
    <div className='museum-tab'>
      <Place name='DESIGN MUSEUM' />
      <Events eventType='exhibitions' coord={{lat: 60.163206, lon: 24.946383, range: 0.1 }} />
      <Place name='MUSEUM OF PHOTOGRAPHY' />
      <Events eventType='exhibitions' coord={{lat: 60.162139, lon: 24.905767, range: 0.1 }} />
      <Place name='NATURAL HISTORY MUSEUM' />
      <Events eventType='exhibitions' coord={{lat: 60.171529, lon: 24.931260, range: 0.1 }} />
      <Place name='THE NATIONAL MUSEUM OF FINLAND' />
      <Events eventType='exhibitions' coord={{lat: 60.175078, lon: 24.931627, range: 0.1 }} />
    </div>
  </>
  )
}

export default Tab;
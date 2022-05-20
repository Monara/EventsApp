import React from 'react';
import Place from './Place';
import Events from './Events';

//for now getting events with coordinates: API doesn't support by name or address

const ArtTab = () => {
  return (
    <div>
        <Place name='AMOS REX' address='Mannerheimintie 22-24, Helsinki' hours={{mon:'11.00–20.00', tue:'–',wed:'11.00–20.00', thu:'11.00–20.00', fri:'11.00–20.00', sat:'11.00–17.00', sun:'11.00–17.00'}} prices='20€/15€/5€'/>
        <Events eventType='exhibitions' coord={{lat: 60.170765, lon: 24.936496, range: 0.1 }} />
        <Place name='ATENEUM' address='Kaivokatu 2, Helsinki' hours={{mon:'–', tue:'10.00–18.00',wed:'10.00–20.00', thu:'10.00–20.00', fri:'10.00–18.00', sat:'10.00–17.00', sun:'10.00–17.00'}} prices='18€/16€'/>
        <Events eventType='exhibitions' coord={{lat: 60.170289, lon: 24.944060, range: 0.1 }} />
        <Place name='KIASMA' address='Mannerheiminaukio 2, Helsinki' hours={{mon:'–', tue:'10.00–20.30',wed:'10.00–20.30', thu:'10.00–20.30', fri:'10.00–20.30', sat:'10.00–18.00', sun:'10.00–17.00'}} prices='18€/16€'/>
        <Events eventType='exhibitions' coord={{lat: 60.172019, lon: 24.936645, range: 0.1 }} />
        <Place name='SINEBRYCHOFF ART MUSEUM' address='Bulevardi 40, Helsinki' hours={{mon:'–', tue:'11.00–18.00',wed:'11.00–20.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'10.00–17.00', sun:'10.00–17.00'}} prices='16€/14€'/>
        <Events eventType='exhibitions' coord={{lat: 60.162600, lon: 24.932445, range: 0.1 }} />
    </div>
  )
}

const MuseumTab = () => {

  return (
    <div>
      <Place name='DESIGN MUSEUM' address='Korkeavuorenkatu 23, Helsinki' hours={{mon:'–', tue:'11.00–20.00',wed:'11.00–18.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'11.00–18.00', sun:'11.00–18.00'}} prices='12€/10€/6€, free on last Tuesday of every month 16.00-20.00'/>
      <Events eventType='exhibitions' coord={{lat: 60.163206, lon: 24.946383, range: 0.1 }} />
      <Place name='MUSEUM OF PHOTOGRAPHY' address='The Cable Factory, Kaapeliaukio 3, staircase G, Helsinki' hours={{mon:'–', tue:'11.00–18.00',wed:'11.00–20.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'11.00–18.00', sun:'11.00–18.00'}} prices='12€/6€'/>
      <Events eventType='exhibitions' coord={{lat: 60.162139, lon: 24.905767, range: 0.1 }} />
      <Place name='NATURAL HISTORY MUSEUM' address='Pohjoinen Rautatiekatu 13, Helsinki' hours='too many to list' prices='17€/14€/8€'/>
      <Events eventType='exhibitions' coord={{lat: 60.171529, lon: 24.931260, range: 0.1 }} />
      <Place name='THE NATIONAL MUSEUM OF FINLAND' address='Mannerheimintie 34, Helsinki' hours={{mon:'11.00-18.00 (closed Sep-Apr)', tue:'11.00–18.00',wed:'11.00–18.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'11.00–18.00', sun:'11.00–18.00'}} prices='15€/10€, free on Fridays 16.00-18.00'/>
      <Events eventType='exhibitions' coord={{lat: 60.175078, lon: 24.931627, range: 0.1 }} />
    </div>
  )
}

export {ArtTab, MuseumTab};
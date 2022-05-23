import React from 'react';
import Place from './Place';
import Events from './Events';

//for now getting events with coordinates: API doesn't support by name or address. Change later

const ArtTab = () => {
  return (
    <div>
        <Place name='AMOS REX' address='Mannerheimintie 22-24, Helsinki' hours={{mon:'11.00–20.00', tue:'–',wed:'11.00–20.00', thu:'11.00–20.00', fri:'11.00–20.00', sat:'11.00–17.00', sun:'11.00–17.00'}} prices='20€/15€/5€'/>
        <Events eventType='exhibitions' coord={{lat: 60.17033004, lon: 24.93618583, range: 0.1 }} />
        <Place name='ATENEUM' address='Kaivokatu 2, Helsinki' hours={{mon:'–', tue:'10.00–18.00',wed:'10.00–20.00', thu:'10.00–20.00', fri:'10.00–18.00', sat:'10.00–17.00', sun:'10.00–17.00'}} prices='18€/16€'/>
        <Events eventType='exhibitions' coord={{lat: 60.170289, lon: 24.944060, range: 0.1 }} />
        <Place name='KIASMA' address='Mannerheiminaukio 2, Helsinki' hours={{mon:'–', tue:'10.00–20.30',wed:'10.00–20.30', thu:'10.00–20.30', fri:'10.00–20.30', sat:'10.00–18.00', sun:'10.00–17.00'}} prices='18€/16€'/>
        <Events eventType='exhibitions' coord={{lat: 60.17206192, lon: 24.93661880, range: 0.01 }} />
        <Place name='SINEBRYCHOFF ART MUSEUM' address='Bulevardi 40, Helsinki' hours={{mon:'–', tue:'11.00–18.00',wed:'11.00–20.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'10.00–17.00', sun:'10.00–17.00'}} prices='16€/14€'/>
        <Events eventType='exhibitions' coord={{lat: 60.16262054, lon: 24.93252372, range: 0.1 }} />
    </div>
  )
}

const MuseumTab = () => {

  return (
    <div>
      <Place name='DESIGN MUSEUM' address='Korkeavuorenkatu 23, Helsinki' hours={{mon:'–', tue:'11.00–20.00', wed:'11.00–18.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'11.00–18.00', sun:'11.00–18.00'}} prices='12€/10€/6€, free on last Tuesday of every month 16.00-20.00'/>
      <Events eventType='exhibitions' coord={{lat: 60.16312408, lon: 24.94660377, range: 0.01 }} />
      <Place name='CABLE FACTORY MUSEUMS' address='The Cable Factory, Kaapeliaukio 3, staircase G, Helsinki' hours={{mon:'–', tue:'11.00–18.00', wed:'11.00–20.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'11.00–18.00', sun:'11.00–18.00'}} prices='12€/6€'/>
      <Events eventType='exhibitions' coord={{lat: 60.16188430, lon: 24.90580749, range: 0.1 }} />
      <Place name='NATURAL HISTORY MUSEUM' address='Pohjoinen Rautatiekatu 13, Helsinki' hours={{mon:'–', tue:'10.00–17.00', wed:'10.00–19.00 (10.00-17.00 Jun 27-Aug 14)', thu:'10.00–17.00', fri:'10.00–17.00', sat:'10.00–18.00 (10.00-17.00 Jun 27-Aug 14)', sun:'10.00–16.00 (10.00-17.00 Jun 27-Aug 14)'}} prices='17€/14€/8€'/>
      <Events eventType='exhibitions' coord={{lat: 60.17144775, lon: 24.93123054, range: 0.01 }} />
      <Place name='THE NATIONAL MUSEUM OF FINLAND' address='Mannerheimintie 34, Helsinki' hours={{mon:'11.00-18.00 (closed Sep-Apr)', tue:'11.00–18.00', wed:'11.00–18.00', thu:'11.00–18.00', fri:'11.00–18.00', sat:'11.00–18.00', sun:'11.00–18.00'}} prices='15€/10€, free on Fridays 16.00-18.00'/>
      <Events eventType='exhibitions' coord={{lat: 60.17486190, lon: 24.93200683, range: 0.1 }} />
    </div>
  )
}

export {ArtTab, MuseumTab};
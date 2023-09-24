import React from 'react'
import { NavBar } from '../components/NavBar'
import SearchMap from '../components/SearchMap'
import Mapp, {Marker, NavigationControl, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';
import locationImg from '../assets/img/location.svg';

 

function Map () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selected,setSelected]= useState(null);
  const [x,setX]= useState(false);
  const [lng,setLng]= useState(9.7462);
  const [lat,setLat]= useState(30.8335);
  const [viewport,setViewport] = useState({
    // latitude:9.7462,
    // longitude:30.8335,
    // width:window.innerWidth,
    // height: window.innerHeight,
    // zoom:3,

  });

  const pop = (item) => {
    
    return(<Popup latitude={item.lat} longitude={item.lng}>
      <div>
        {item.name}
      </div>
    </Popup>
    )

  }

  useEffect(() => {
    fetch("https://6506a5173a38daf4803e8f5c.mockapi.io/api/cheko/restaurants")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
    <NavBar></NavBar>
    <SearchMap/>
    <div>Map</div>
   
<div className='map'>
<Mapp            
  mapStyle="mapbox://styles/mapbox/light-v10" 
  mapboxAccessToken={'pk.eyJ1IjoiYXNpYS0yMzIzIiwiYSI6ImNsbXZ3ZnNiZTBwNHIycXBlOG1oYzhiMzcifQ.NXoy8iZCX0wwtmpuP8TwGQ'}
  style={{
    width:window.innerWidth,
    height: window.innerHeight,
    
  }}
  initialViewState={{
    longitude:lng,
    latitude:lat,
    zoom:3,
  }}
  // {...viewport}
  //  onViewportChange={(newView)=> setViewport(newView)}
   //mapStyle="mapbox://styles/mapbox/streets-v9"
>
{items.map(item => (
  <Marker  key={item.id} longitude={item.lng} latitude={item.lat}>
 
   <button className="marker-btn" onClick={() => {setSelected(item); setX(true); console.log("clicked")
    
    }}>
   <img src={locationImg} alt='Black marker'/>
  
   </button>

  
    </Marker>

    
    
))
}


{x ? <Popup longitude={selected.lng} latitude={selected.lat}>
      <div>
        hi
        {selected.name}
      </div>
    </Popup>
    :null
   }

<NavigationControl position='top-right'/>
  </Mapp>
  </div>
    </div>
  )
}
}

export default Map
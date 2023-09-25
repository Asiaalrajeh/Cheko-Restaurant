import React from 'react'
import { NavBar } from '../components/NavBar'
import SearchMap from '../components/SearchMap'
import Mapp, {Marker, NavigationControl, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useEffect } from 'react';
import locationImg from '../assets/img/location.svg';
import { Link } from "react-router-dom";
import arrow from '../assets/img/arrow_right.svg';
import  { useContext } from "react";
import { ThemeContext } from "../Theme";

 

function Map () {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selected,setSelected]= useState(null);
  const [lng,setLng]= useState(9.7462);
  const [lat,setLat]= useState(30.8335);
 
  const { theme } = useContext(ThemeContext);


  const handleMarkerClick = marker => {
    setSelected(marker);
  };

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
    <div className={`App ${theme}`}>
    <NavBar/>
            
          <div className='map'>

          <Mapp            
            mapStyle={theme === "light-theme" ?"mapbox://styles/mapbox/light-v10" : "mapbox://styles/mapbox/dark-v10" }
            mapboxAccessToken={'pk.eyJ1IjoiYXNpYS0yMzIzIiwiYSI6ImNsbXZ3ZnNiZTBwNHIycXBlOG1oYzhiMzcifQ.NXoy8iZCX0wwtmpuP8TwGQ'}
            style={{
              width:'100%',
              height: window.innerHeight,
              
            }}
            initialViewState={{
              longitude:lng,
              latitude:lat,
              zoom:4,
            }}
           
          >
          {items.map(item => (
            <Marker  key={item.id} latitude={item.lat} longitude={item.lng} >
          
            <button className="marker-btn" onClick={() => {handleMarkerClick(item)}}>
            <img src={locationImg} alt='Black marker'/>
            
            </button>
              </Marker>
            
          ))}

          {selected !== null? (<Popup  key={selected.id} latitude={selected.lat} longitude={selected.lng} closeOnClick={false} >
                <div className={`popMap ${theme}`}>
                <div className="mapImg">
                <img src={selected.image !== 'N/A' ? selected.image : 'https://via.placeholder.com/400' } alt={selected.name} />
                  </div>
                  <div className="mapText">
                    <h3 style={{marginBottom:30}}>{selected.name}</h3>
                    

                    <div className='mapNav'>
                      <span>menu list</span>
                      <button><Link to="/"><img src={arrow} alt='arrow'/></Link></button>
                    </div>
                    </div>
                 
                </div>
              </Popup>) : <></>
              
            }

          <NavigationControl position='top-right'/>
            </Mapp>
            </div>
            <SearchMap/>
    </div>
  )
}
}

export default Map
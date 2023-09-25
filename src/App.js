import './App.css';
import { NavBar } from './components/NavBar';
import {SearchBar} from './components/SearchBar';
import Home from './pages/Home';
import Category from './components/Category';
import 'mapbox-gl/dist/mapbox-gl.css';
import  { useContext } from "react";
import { ThemeContext } from "./Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
     <NavBar/>
     <SearchBar/>
     {/* <Category/> */}
     {/* <Home/> */}
    </div>
  );
}

export default App;

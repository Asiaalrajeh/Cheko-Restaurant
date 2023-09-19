import './App.css';
import { NavBar } from './components/NavBar';
import {SearchBar} from './components/SearchBar';
import Home from './pages/Home';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SearchBar/>
     {/* <Category/> */}
     {/* <Home/> */}
    </div>
  );
}

export default App;

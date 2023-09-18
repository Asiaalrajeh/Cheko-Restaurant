import './App.css';
import { NavBar } from './components/NavBar';
import {SearchBar} from './components/SearchBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <NavBar/>
     {/* <SearchBar/> */}
     <Home/>
    </div>
  );
}

export default App;

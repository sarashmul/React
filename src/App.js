import logo from './logo.svg';
import './App.css';
import Printme from './componants/Sara';
import Galery from './lesson2/componants/galery';
import Pizza from './lesson3/componants/ServerCall';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './lesson4/componants/HomePage';
import NavBar from './lesson4/componants/NavBar';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //      {/* <Printme name="sara"></Printme> */}
    //      <Galery></Galery>
    //     <Pizza></Pizza>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <NavBar></NavBar>

            

    
  );
}

export default App;

// import { useEffect } from 'react';
// import { useState } from 'react';

import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './HomePage';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Thankyou from './Thankyou';
export default function NavBar(){
    // const[images,setImages]=useState([a,b,c,d,e,f]);
    // const[index,setIndex]=useState(0);
    return(

/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav> */


        <BrowserRouter>
        <Link to="/">HomePage</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/thankyuo" element={<Thankyou></Thankyou>}></Route>
        
        </Routes>
        </BrowserRouter>
        
        
        );
}
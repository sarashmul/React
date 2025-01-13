// // import { useEffect } from 'react';
// // import { useState } from 'react';

// import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import Home from './HomePage';
// import Services from './Services';
// import About from './About';
// import Contact from './Contact';
// import Thankyou from './Thankyou';
// import i18n from'../i18n.js';
// import themcontext from './ThemContext.js';
// import { useTranslation } from "react-i18next";
// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function NavBar(){
//     // const[images,setImages]=useState([a,b,c,d,e,f]);
//     // const[index,setIndex]=useState(0);
//     const {t}=useTranslation();
//     const changeLanguage = (lng) => {
//       i18n.changeLanguage(lng);
//     }
//     return(

// /* <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
  
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//         <a className="nav-link" href="#">Features</a>
//         <a className="nav-link" href="#">Pricing</a>
//         <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav> */
// <div className='nav nav-pills nav-fill black-background'>
// <themcontext.Provider>
//         <BrowserRouter >
//         <button onClick={() => changeLanguage('en')} className="btn btn-outline-info"> en</button>
//         <button onClick={() => changeLanguage('he')} className="btn btn-outline-info"> he</button> 
//         <li className="nav-item">
//         <Link to="/" className="nav-link text-info" aria-current="page">{t("HomePage")}</Link>
//         </li>
//         <li className="nav-item">
//         <Link to="/About" className="nav-link text-info">{t("About")}</Link>
//         </li>
//         <li className="nav-item">
//         <Link to="/Services" className="nav-link text-info">{t("Services")}</Link>
//         </li>
//         <li className="nav-item">
//         <Link to="/Contact" className="nav-link text-info">{t("Contact")}</Link>
//         </li>
        
        
        
        
         
//         <Routes>
//         <Route path="/" element={<Home></Home>}></Route>
//         <Route path="/Contact" element={<Contact></Contact>}></Route>
//         <Route path="/Services" element={<Services></Services>}></Route>
//         <Route path="/About" element={<About></About>}></Route>
//         <Route path="/thankyuo" element={<Thankyou></Thankyou>}></Route>
        
//         </Routes>
//         </BrowserRouter>
//         </themcontext.Provider>
//         </div>
        
        
//         );
// }

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Thankyou from './Thankyou';
import i18n from '../i18n.js';
import themcontext from './ThemContext.js';
import { useTranslation } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const { t } = useTranslation();
    
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <themcontext.Provider>
            <BrowserRouter>
                <div className='nav nav-pills nav-fill black-background'>
                <li className="item">
                    <button onClick={() => changeLanguage('en')} className="btn btn-outline-info">en</button>
                    <button onClick={() => changeLanguage('he')} className="btn btn-outline-info">he</button>
                    </li> 
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">{t("HomePage")}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">{t("About")}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className="nav-link">{t("Services")}</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link">{t("Contact")}</Link>
                    </li>
                </div>
                
                {/* Components rendered below the navigation */}
                <div >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Services" element={<Services />} />
                    <Route path="/About" element={<About />} />
                    <Route path='/thankyuo' element={<Thankyou></Thankyou>} />
                </Routes>
                </div>
            </BrowserRouter>
        </themcontext.Provider>
    );
}
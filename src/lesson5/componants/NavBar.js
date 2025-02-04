

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Presentation from './PresentationTasks';
import PresentationRecyclingBin from './presentationRecyclingBin';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBarTask() {
    return (
        
            <BrowserRouter>
                <div className='nav nav-fill'>
                
                    <li className="nav-item">
                        <Link to="/" className="nav-link" aria-current="page">HomePage</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/RecyclingBin" className="nav-link">RecyclingBin</Link>
                    </li>
                </div>
               
                <div >
                <Routes>
                    <Route path="/" element={<Presentation></Presentation>} />
                    <Route path="/RecyclingBin" element={<PresentationRecyclingBin></PresentationRecyclingBin>} />
                </Routes>
                </div>
            </BrowserRouter>
       
    );
}
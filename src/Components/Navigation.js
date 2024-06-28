import React from "react";
import { BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function Navigation(){
    return(
        <>
        <nav>Navigation</nav>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/Contact" element={<Contact/>} />
            </Routes>
        </Router>
        </>
    );
}

export default Navigation;
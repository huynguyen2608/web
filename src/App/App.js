import React from 'react';
import {  Routes, Route} from 'react-router-dom';
import Home from '../Modules/HomePage/Home';
import AppFooter from './AppFooter/AppFooter';
import AppHeader from './AppHeader/AppHeader';


function App() {
    return (
        <div className='app background-app'>
            <AppHeader className="header-app "></AppHeader>
            <Home/>
            {/* <Routes> */}
                {/* <Route path = "/" element={Home}/> */}
            {/* </Routes> */}
            <AppFooter className="footer-app"></AppFooter>
        </div>
    );
}

export default App;
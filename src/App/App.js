import React from 'react';
import {  Router, Route} from 'react-router-dom';
import Home from '../Modules/HomePage/Home';
import AppFooter from './AppFooter/AppFooter';
import AppHeader from './AppHeader/AppHeader';


function App() {
    return (
        <div className='app background-app'>
            <AppHeader className="header-app "></AppHeader>
            <Home/>
            {/* <Router>
                <Route path = "/" element={Home}/>
            </Router> */}
            <AppFooter className="footer-app"></AppFooter>
        </div>
    );
}

export default App;
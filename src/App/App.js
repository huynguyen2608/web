import React from 'react';
import {  Routes, Route, Router} from 'react-router-dom';
import Camera from '../Modules/Camera/Camera';
import Home from '../Modules/HomePage/Home';
import InstallFiber from '../Modules/InstallFiber/InstallFiber';
import News from '../Modules/News/News';
import RegisterOnline from '../Modules/RegisterOnline/RegisterOnline';
import TV from '../Modules/TV/TV';
import AppFooter from './AppFooter/AppFooter';
import AppHeader from './AppHeader/AppHeader';


function App() {
    return (
        <div className='app background-app'>
            <AppHeader className="header-app "></AppHeader>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "fiber" element={<InstallFiber/>}/>
                <Route path = "tv" element={<TV/>}/>
                <Route path = "news" element={<News/>}/>
                <Route path = "camera" element={<Camera/>}/>
                <Route path = "register" element={<RegisterOnline/>}/>
                <Route path = "home" element={<Home/>}/>
            </Routes>
            <AppFooter className="footer-app"></AppFooter>
        </div>
    );
}

export default App;
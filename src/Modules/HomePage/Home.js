import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HomeView from './Components/HomeView';
import "./Home.scss";

class Home extends Component {

    render() {
        return (
            <div className="HomePage">
                <HomeView/>
            </div>
        )
    }
}

export default Home;
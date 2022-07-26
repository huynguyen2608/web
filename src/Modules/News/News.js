import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import NewsView from './Components';

class News extends Component {

    render() {
        return (
            <div className="HomePage">
                <NewsView/>
            </div>
        )
    }
}

export default News;
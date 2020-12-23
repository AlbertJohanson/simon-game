import React from 'react';
import ReactDOM from 'react-dom';
import './styles/components/App.css'
import { 
    Route,
    BrowserRouter as Router,
    Switch } from "react-router-dom";
import Welcome from './screens/Welcome';
import Game  from './screens/Game';

ReactDOM.render(
    <Router>
        <Switch> 
            <Route path="/game">
                <Game />         
            </Route>
            <Route path="/">
                <Welcome />         
            </Route>
        </Switch>
    </Router>
, document.getElementById('app'));
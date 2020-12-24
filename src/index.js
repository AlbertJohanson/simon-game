import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './styles/components/App.css'
import { 
    Route,
    BrowserRouter as Router,
    Switch } from "react-router-dom";
import Welcome from './screens/Welcome';
import Board  from './screens/Board';
import store from './store'

ReactDOM.render(
    <Provider store={store}> 
         <Router>
        <Switch> 
            <Route path="/game">
                <Board />         
            </Route>
            <Route path="/">
                <Welcome />         
            </Route>
        </Switch>
    </Router>
    </Provider>
, document.getElementById('app'));
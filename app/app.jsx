import React from "react";
import ReactDOM from "react-dom";
import {Router,Switch,Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import "../scss/main.scss";
import Main from './components/Main.jsx';
import Projects from './components/Projects.jsx';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/projects' component={Projects} />
        </Switch>
    </Router>
    , document.getElementById('root')
);
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
import UpdateCollection from './screens/UpdateCollection';
import Header from './components/Header';
import LoginScreen from "./screens/LoginScreen";
import CityScreen from "./screens/CityScreen";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/throw' exact component={HomeScreen} />
                    <Route path='/reportCollection' exact component={HomeScreen} />
                    <Route path='/reportIsolation' exact component={HomeScreen} />
                    <Route path='/stats' exact component={HomeScreen} />
                    <Route path='/update' exact component={UpdateCollection} />
                    <Route path='/log' exact component={LoginScreen} />
                    <Route path='/cityPanel' exact component={CityScreen} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

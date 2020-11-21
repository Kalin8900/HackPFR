import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import HomeScreen from './screens/HomeScreen';
=======
import MainScreen from './screens/MainScreen';
import UpdateCollection from './screens/UpdateCollection';
>>>>>>> 82c2624cd4c43dd7148c14f573e7cef9e0856eb7
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
<<<<<<< HEAD
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/throw' exact component={HomeScreen} />
                    <Route path='/reportCollection' exact component={HomeScreen} />
                    <Route path='/reportIsolation' exact component={HomeScreen} />
                    <Route path='/stats' exact component={HomeScreen} />
                    <Route path='/update' exact component={HomeScreen} />
                    <Route path='/log' exact component={LoginScreen} />
                    <Route path='/cityPanel' exact component={CityScreen} />
=======
                    <Route path='/' exact component={MainScreen} />
                    <Route path='/aktualizuj' exact component={UpdateCollection} />
                    <Route path='/cases' exact component={MainScreen} />
>>>>>>> 82c2624cd4c43dd7148c14f573e7cef9e0856eb7
                </Switch>
            </Router>
        </div>
    );
}

export default App;

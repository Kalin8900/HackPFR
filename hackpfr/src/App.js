import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import MainScreen from './screens/MainScreen';
import CollectionsMapScreen from './screens/CollectionsMapScreen';
import Header from './components/Header';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header />
            <Router>
                <Switch>
                    <Route path='/' exact component={MainScreen} />
                    <Route path='/bins' exact component={MainScreen} />
                    <Route path='/cases' exact component={MainScreen} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

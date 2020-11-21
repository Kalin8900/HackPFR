import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './screens/HomeScreen';
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
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/bins' exact component={HomeScreen} />
                    <Route path='/cases' exact component={HomeScreen} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;

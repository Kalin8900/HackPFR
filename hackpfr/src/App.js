import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
import HomeScreen from './screens/HomeScreen';
import UpdateCollection from './screens/UpdateCollection';
import ReportCollection from './screens/ReportCollection';
import ReportIsolation from './screens/ReportIsolation';
import CollectionsMapScreen from './screens/CollectionsMapScreen';
import Header from './components/Header';
import LoginScreen from "./screens/LoginScreen";
import CityScreen from "./screens/CityScreen";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import database from "./firebase";
import mainTheme from "./assets/graphics/theme";
const mt = mainTheme;

function App() {

    useEffect(() => {
        const testRef = database.ref('test');

        testRef.on('value', (snap) => {
            const data = snap.val();
            console.log("Logging data from Firebase", data);
        });
    })

    return (
        <div className="App" style={{fontFamily: mt.font.defaultFont, color: mt.colors.black}}>
            <Header />
            <Router>
                <Switch>
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/throw' exact component={CollectionsMapScreen} />
                    <Route path='/reportCollection' exact component={ReportCollection} />
                    <Route path='/reportIsolation' exact component={ReportIsolation} />
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

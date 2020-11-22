import React, {useState, useEffect} from 'react';
import L from "leaflet";
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
import CovidScreen from "./screens/CovidScreen";
import CovidUploadScreen from "./screens/CovidUploadScreen";
import DeclarationsScreen from "./screens/DeclarationsScreen";
import './App.css';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {database, auth} from "./firebase";
import mainTheme from "./assets/graphics/theme";
import NotFound from "./screens/404";
import StatsScreen from "./screens/StatsScreen";
import PermissionDenied from "./components/PermissionDenied";
import LogOut from "./screens/LogOut";

const mt = mainTheme;

function App() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            console.log('LOGGIN FROM APP', user);
        })
    })

    useEffect(() => {
        if (user)
            console.log(user.displayName)

        // const testRef = database.ref('declarations');
        //
        // testRef.on('value', (snap) => {
        //     const data = snap.val();
        //     console.log("Logging data from Firebase", data);
        // });
    }, [user])

    if (user)
        return (
            <div className="App" style={{fontFamily: mt.font.defaultFont, color: mt.colors.black}}>
                <Header user={user}/>
                <Router>
                    <Switch>
                        <Route path='/' exact component={HomeScreen}/>
                        <Route path='/throw' exact component={CollectionsMapScreen}/>
                        <Route path='/reportCollection' exact component={ReportCollection}/>
                        <Route path='/reportIsolation' exact component={ReportIsolation}/>
                        <Route path='/stats' exact component={StatsScreen}/>
                        <Route path='/update' exact component={UpdateCollection}/>
                        <Route path='/log'>
                            <LoginScreen/>
                        </Route>
                        <Route path='/cityPanel'>
                            <CityScreen user={user}/>
                        </Route>
                        <Route path='/covid'>
                            <CovidScreen user={user}/>
                        </Route>
                        <Route path='/covidUpload'>
                            <CovidUploadScreen user={user}/>
                        </Route>
                        <Route path='/declarations'>
                            <DeclarationsScreen user={user}/>
                        </Route>
                        <Route path='/logout'>
                            <LogOut user={user}/>
                        </Route>
                        <Route path='*' exact component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        );

    return (
        <div className="App" style={{fontFamily: mt.font.defaultFont, color: mt.colors.black}}>
            <Header/>
            <Router>
                <Switch>
                    <Route path='/' exact component={HomeScreen}/>
                    <Route path='/throw' exact component={CollectionsMapScreen}/>
                    <Route path='/reportCollection' exact component={ReportCollection}/>
                    <Route path='/reportIsolation' exact component={ReportIsolation}/>
                    <Route path='/stats' exact component={StatsScreen}/>
                    <Route path='/log' exact component={LoginScreen}/>
                    <Route path='/cityPanel' exact component={PermissionDenied}/>
                    <Route path='/covid' exact component={PermissionDenied}/>
                    <Route path='/covidUpload' exact component={PermissionDenied}/>
                    <Route path='/declarations' exact component={PermissionDenied}/>
                    <Route path='*' exact component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

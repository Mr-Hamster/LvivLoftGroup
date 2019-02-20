import React from 'react';
import './App.css';
import MainPage from '../src/pages/MainPage/';
import LoftPage from './pages/Loft';
import ConstractionPage from './pages/Constraction';
import PrisonPage from './pages/Prison';
import ApartamentPage from './pages/Apartaments'
import BuhivPage from './pages/Buhiv'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


export default class App extends React.Component {
  render() {
    return ( 
        <div className="App"> 
            <BrowserRouter>
              <Switch>
                <Route exact={true} path='/' component={MainPage}/>
                <Route path='/lviv-loft-prison' component={PrisonPage}/>
                <Route path='/lviv-loft-construction' component={ConstractionPage}/>
                <Route path='/lviv-loft-hostel' component={LoftPage}/>
                <Route path='/lviv-loft-apartaments' component={ApartamentPage}/>
                <Route path='/villa-buhiv' component={BuhivPage}/>
              </Switch>
            </BrowserRouter>
        </div>
      
    );
  }
}

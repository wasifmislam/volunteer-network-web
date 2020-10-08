import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Components/Home/Home';
import Registraion from './Components/Registration/Registraion';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      
     <Header/>
     <Switch>
     <Route path='/home'>
     <Home/>
     </Route>
     <Route path='/registration/:volType'>
       <Registraion/>
     </Route>
     <Route path='/login'>
       <Login/>
     </Route>

     </Switch>
    </Router>
  );
}

export default App;

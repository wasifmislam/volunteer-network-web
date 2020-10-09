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
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
    </UserContext.Provider>
  );
}

export default App;

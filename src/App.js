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

function App() {
  return (
    <Router>
     <Header/>
     <Switch>
     <Home></Home>

     </Switch>
    </Router>
  );
}

export default App;

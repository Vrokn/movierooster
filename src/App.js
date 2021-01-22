import React, { /* useState */ } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavHeader } from './Components/NavHeader';
import { Top } from './Components/Top';

/* import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react' */
function App() {

  const apikey = 'api_key=9ebb3ffadcb7802418b60d473c655910';
  const base = 'https://api.themoviedb.org/3/movie/';
  const imagebase = 'https://image.tmdb.org/t/p/w300/';
  
  return (
    <Router>
      <NavHeader />
      <Switch>
        <Route path="/:id">
          <Top />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
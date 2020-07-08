import React from 'react';
import Home from './pages/home/Home';
import VideoChatPage from './pages/videoChatPage/VideoChatPage';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/room">
            <VideoChatPage/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

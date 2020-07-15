import React from 'react';
import Home from './pages/home/Home';
import VideoChatPage from './pages/videoChatPage/VideoChatPage';
import './App.scss';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

function App() {

  return (
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/room/:roomName">
            <VideoChatPage />
          </Route>
      </Switch>
  );
}

export default withRouter(App);

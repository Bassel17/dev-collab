import React from 'react';
import VideoChatComponent from './components/videoChatComponent/VideoChatComponent';
import './App.scss';

const interfaceConfigOverwrite = { 
  DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow Coder',
  APP_NAME: 'Dev-Collab',
  CLOSE_PAGE_GUEST_HINT: true,
  TOOLBAR_BUTTONS: []
}

const configOverwrite = {
  enableUserRolesBasedOnToken: true,
  enableWelcomePage: false
}

function App() {
  return (
    <VideoChatComponent 
      interfaceConfigOverwrite = {interfaceConfigOverwrite} 
      configOverwrite = {configOverwrite}
      roomName = "localhost-room"
      displayName = "Bassel Kanso"
      password = "123"
      height = "85vh"
      width = "70vw"
    />
  );
}

export default App;

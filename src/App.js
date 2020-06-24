import React from 'react';
import VideoChatComponent from './components/videoChatComponent/VideoChatComponent';
import './App.scss';

const interfaceConfigOverwrite = { 
  DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow Coder',
  APP_NAME: 'Dev-Collab',
  CLOSE_PAGE_GUEST_HINT: true,
  TOOLBAR_BUTTONS: [],
  DISPLAY_WELCOME_PAGE_CONTENT: false,
  MOBILE_APP_PROMO: false,
  NATIVE_APP_NAME: 'Dev-Collab',
  SHOW_JITSI_WATERMARK: false,
  SHOW_POWERED_BY: false,
  SHOW_PROMOTIONAL_CLOSE_PAGE: false,
  SHOW_WATERMARK_FOR_GUESTS: false,
}

const configOverwrite = {
  enableUserRolesBasedOnToken: true,
  enableWelcomePage: false
}

function App() {
  return (
    <div>
      <VideoChatComponent 
        interfaceConfigOverwrite = {interfaceConfigOverwrite} 
        configOverwrite = {configOverwrite}
        roomName = "localhost-room"
        displayName = "Bassel Kanso"
        password = "123"
      />
    </div>
  );
}

export default App;

import React from 'react';
import VideoChatComponent from '../components/videoChatComponent/VideoChatComponent';
import interfaceConfigOverwrite from '../configs/interfaceConfig';
import configOverwrite from '../configs/config';

function VideoChatPage() {
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

export default VideoChatPage;
import React from 'react';
import VideoChatComponent from '../../components/videoChatComponent/VideoChatComponent';
import interfaceConfigOverwrite from '../../configs/interfaceConfig';
import configOverwrite from '../../configs/config';
import {
  withRouter,
  useParams,
  useLocation
} from "react-router-dom";

function VideoChatPage() {
  const {roomName} = useParams();
  const location = useLocation();
  return (
    <div>
      <VideoChatComponent 
        interfaceConfigOverwrite = {interfaceConfigOverwrite} 
        configOverwrite = {configOverwrite}
        roomName = {roomName}
        displayName = {location.state?.username}
        password = {location.state?.password}
      />
    </div>
  );
}

export default withRouter(VideoChatPage);
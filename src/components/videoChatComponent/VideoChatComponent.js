import React, {useEffect} from 'react';
import { useJitsi } from 'react-jutsu'

const VideoChatComponent = (props) => {
    const roomName = props.roomName;
    const parentNode = 'jitsi-container';
    const height = "100%";
    const width = "100%";

    const interfaceConfigOverwrite = props.interfaceConfigOverwrite;
    const configOverwrite = props.configOverwrite
    const jitsi = useJitsi({ roomName, parentNode ,height, width, interfaceConfigOverwrite, configOverwrite})

    useEffect(() => {
        if (jitsi) {
            jitsi.addEventListener('videoConferenceJoined', () => {
                jitsi.executeCommand('displayName', props.displayName);
                jitsi.executeCommand('password', props.password);
            });
        }
        return () => jitsi && jitsi.dispose() 
    })

    return <div style={{height:props.height,width:props.width}}id={parentNode} />
}

export default VideoChatComponent;
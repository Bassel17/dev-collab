import React, {useEffect, useState} from 'react';
import './VideoChatComponent.scss';
import { useJitsi } from 'react-jutsu';
import { Icon } from '@iconify/react';
import videoFilled from '@iconify/icons-carbon/video-filled';
import videoOffFilled from '@iconify/icons-carbon/video-off-filled';
import microphoneFilled from '@iconify/icons-carbon/microphone-filled';
import microphoneOffFilled from '@iconify/icons-carbon/microphone-off-filled';
import screenOff from '@iconify/icons-carbon/screen-off';
import screenIcon from '@iconify/icons-carbon/screen';
import phoneOffFilled from '@iconify/icons-carbon/phone-off-filled';

const VideoChatComponent = (props) => {
    const roomName = props.roomName;
    const parentNode = 'jitsi-container';
    const height = "100%";
    const width = "100%";
    const [videoState, setVideoState] = useState(true);
    const [microphoneState, setMicrophoneState] = useState(true);
    const [screenShareState, setScreenShareState] = useState(false);
    const interfaceConfigOverwrite = props.interfaceConfigOverwrite;
    const configOverwrite = props.configOverwrite
    const jitsi = useJitsi({ roomName, parentNode ,height, width, interfaceConfigOverwrite, configOverwrite})

    useEffect(() => {
        if (jitsi) {
            jitsi.addEventListener('videoConferenceJoined', () => {
                jitsi.executeCommand('displayName', props.displayName);
                jitsi.executeCommand('password', props.password);
            });
            jitsi.addEventListener('screenSharingStatusChanged', (screenShareStatus) => {
                setScreenShareState(screenShareStatus.on);
            });
            jitsi.addEventListener('audioMuteStatusChanged', (audioMuteStatus) => {
                setMicrophoneState(!audioMuteStatus.muted);
            });
            jitsi.addEventListener('videoMuteStatusChanged', (videoMuteStatus) => {
                setVideoState(!videoMuteStatus.muted);
            });
        }
        return () => jitsi && jitsi.dispose() 
    },[jitsi, props])

    const toggle = command => jitsi.executeCommand(command) ;

    return (
        <React.Fragment>
            <div className="videobox" id={parentNode} />
            <div className="toolbar">
                <Icon 
                    className="toolbar__icon" 
                    onClick = {()=>toggle('toggleAudio')} 
                    icon={microphoneState? microphoneFilled : microphoneOffFilled }
                />
                <Icon 
                    className="toolbar__icon toolbar__icon--hangup"
                    onClick = {()=>toggle('hangup')} 
                    icon={phoneOffFilled } 
                />
                <Icon 
                    className="toolbar__icon" 
                    onClick = {()=>toggle('toggleVideo')} 
                    icon={videoState ? videoFilled:videoOffFilled} 
                />
                <Icon 
                    className="toolbar__icon" 
                    onClick = {()=>toggle('toggleShareScreen')} 
                    icon={screenShareState ? screenIcon : screenOff}
                />
            </div>
        </React.Fragment>
    )
}

export default VideoChatComponent;
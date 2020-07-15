import React,{useState} from 'react';
import './InputModalComponent.scss';
import {withRouter} from "react-router-dom";

function InputModalComponent(props){
    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleRoomNameChange = (event) => {
        setRoomName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const passData = () => {
        props.history.push({
            pathname:`/room/${roomName}`,
            state:{
                username,
                password
            }
        });
    }

    return(
        <div className = {`${props.visible ? 'modal-container':'modal-container--not-visible'}`}>
            <div className="modal-container__button-container">
                <button onClick={()=>props.toggleModal(false)}>X</button>
            </div>
                    <label className="modal-container__label">
                        username
                    </label>
                    <input 
                        className="modal-container__input" 
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <label className="modal-container__label">
                        room name
                    </label>
                    <input 
                        className="modal-container__input" 
                        type="text"
                        value={roomName}
                        onChange = {handleRoomNameChange}
                    />
                    <label className="modal-container__label">
                        password
                    </label>
                    <input 
                        className="modal-container__input" 
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
            <button 
                className="modal-container__button"
                onClick = {passData}
            >
                {props.buttonText}
            </button>
        </div>
    );
}

export default withRouter(InputModalComponent);
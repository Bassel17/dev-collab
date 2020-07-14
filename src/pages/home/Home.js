import React , {useState} from 'react';
import './Home.scss';
import InputModalComponent from '../../components/inputModalComponent/InputModalComponent';

function Home (){

    const [modalStateCreateSession,setModalStateCreateSession] = useState(false);
    const [modalStateJoinSession,setModalStateJoinSession] = useState(false);

    const toggleModalCreateSession = (boolean) => {
        setModalStateCreateSession(boolean);
    }

    const toggleModalJoinSession = (boolean) => {
        setModalStateJoinSession(boolean)
    }

    return (
        <div className="home-container">
            <div className="home-container__section">
                <h1 className="home-container__section__title">
                    Remote collaboration was never easier!<br/>start your session now
                </h1>
                <button 
                    onClick={()=>toggleModalCreateSession(true)}
                    className="home-container__section__button"
                >
                    Start Session
                </button>
                <button 
                    onClick={()=>toggleModalJoinSession(true)}
                    className="home-container__section__button"
                >
                    Join Session
                </button>
            </div>
            <InputModalComponent
                toggleModal = {toggleModalCreateSession}
                visible = {modalStateCreateSession} 
                buttonText="Start Session"
                fields={[
                    {
                        label:"username",
                        type:"text"
                    },
                    {
                        label:"room name",
                        type:"text"
                    },
                    {
                        label:"password",
                        type:"text"
                    }
                ]}

                className="home-container__modal"
            />
            <InputModalComponent
                toggleModal = {toggleModalJoinSession}
                visible = {modalStateJoinSession} 
                buttonText="Join Session"
                fields={[
                    {
                        label:"username",
                        type:"text"
                    },
                    {
                        label:"room name",
                        type:"text"
                    },
                    {
                        label:"password",
                        type:"text"
                    }
                ]}

                className="home-container__modal"
            />
        </div>
    );
}

export default Home;
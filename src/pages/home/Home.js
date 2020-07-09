import React from 'react';
import './Home.scss';

function Home (){

    return (
        <div className="home-container">
            <div className="home-container__section">
                <h1 className="home-container__section__title">
                    Remote collaboration was never easier start your session now
                </h1>
                <a className="home-container__section__button" href="#input-modal-component" >Start Session</a>
            </div>
        </div>
    );
}

export default Home;
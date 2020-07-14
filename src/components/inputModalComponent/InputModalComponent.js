import React from 'react';
import './InputModalComponent.scss';

function InputModalComponent(props){
    return(
        <div className = {`${props.visible ? 'modal-container':'modal-container--not-visible'}`}>
            <div className="modal-container__button-container">
                <button onClick={()=>props.toggleModal(false)}>X</button>
            </div>
            {props.fields.map((field,index)=>{
                return(
                <React.Fragment key={index}>
                    <label className="modal-container__label">
                        {field.label}
                    </label>
                    <input 
                        className="modal-container__input" 
                        type={field.type}
                    />
                </React.Fragment>
                )
            })}
            <button 
                className="modal-container__button"
            >
                {props.buttonText}
            </button>
        </div>
    );
}

export default InputModalComponent;
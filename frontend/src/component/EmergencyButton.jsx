import React from 'react';
import useEmergency from '../hook/useEmergency';
import './Button.css';


function EmergencyButton(props) {
    const { ws } = props;
    const [title, toggleState] = useEmergency(ws);

    return (
        <button className="Button-root Button-emergency" onClick={ () => toggleState() }>
            <span>{ title }</span>
        </button>
    );
}

export default EmergencyButton;

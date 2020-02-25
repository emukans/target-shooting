import React from 'react';
import './Shot.css'

function Shot(props) {
    const { target } = props;

    return <i className="Shot-icon" style={ { bottom: `${ target.y + 100 }px`, left: `${ target.x + 100 }px` } }/>
}

export default Shot;

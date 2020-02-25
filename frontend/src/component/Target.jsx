import React from 'react';
import Shot from './Shot';
import './Target.css';


function Target(props) {
    const { targetList } = props;

    return (
        <div className='Target-root'>
            { targetList.map(target => (<Shot key={ `target-history-${ target.x }-${ target.y }` } target={ target } />)) }
        </div>
    );
}

export default Target;

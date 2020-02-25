import React from 'react';
import './TargetHistory.css';

function TargetHistory(props) {
    const { targetList } = props;
    return (
        <table className='TargetHistory-root'>
            <thead>
                <tr className='TargetHistory-row-root'>
                    <th className='TargetHistory-cell-root'>X</th>
                    <th className='TargetHistory-cell-root'>Y</th>
                </tr>
            </thead>
            <tbody>{ targetList.map(target => (
                <tr className='TargetHistory-row-root' key={ `target-history-${ target.x }-${ target.y }` }>
                    <td className='TargetHistory-cell-root'>{ target.x }</td>
                    <td className='TargetHistory-cell-root'>{ target.y }</td>
                </tr>
            )) }</tbody>
        </table>
    );
}

export default TargetHistory;

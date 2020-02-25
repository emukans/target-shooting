import React, { useState, useCallback } from 'react';
import './App.css';
import useSocket from './hook/useSocket';
import EmergencyButton from './component/EmergencyButton';
import TargetHistory from './component/TargetHistory';
import Target from './component/Target';


function App() {
  const [targetList, setTargetList] = useState([]);
  const handleMessage = useCallback((target) => {
    setTargetList(list => list.concat([target]));
  }, []);

  const ws = useSocket('ws://localhost:8081', handleMessage);

  return (
    <div className='App'>
      <div className='App-column'>
        <Target className='App-target' targetList={ targetList } />
        <EmergencyButton className='App-emergency-button' ws={ ws } />
      </div>
      <div className='App-column'>
        <TargetHistory className='App-target-history' targetList={ targetList } />
      </div>
    </div>
  );
}

export default App;

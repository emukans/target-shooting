import { useState, useCallback, useMemo } from 'react';

const DEFAULT_STATE = 'DEFAULT_STATE';
const EMERGENCY_STATE = 'EMERGENCY_STATE';

function useEmergency(ws) {
    const [status, setStatus] = useState(DEFAULT_STATE);
    const handleEmergency = useCallback(() => {
        if (status === DEFAULT_STATE) {
            ws.send('terminate');
            setStatus(EMERGENCY_STATE);
            return;
        }

        document.location.reload();
    }, [status, ws]);

    const title = useMemo(() => {
        if (status === DEFAULT_STATE) {
            return 'Emergency stop';
        }

        return 'Restart';
    }, [status]);

    return [title, handleEmergency];
}

export default useEmergency;

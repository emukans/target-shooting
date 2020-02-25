import { useState, useEffect } from 'react';

function useSocket(url, handleMessage = () => {}) {
    const [webSocket] = useState(new WebSocket(url));

    useEffect(() => {
        webSocket.onopen = () => {
            console.log('Connected');
        }

        webSocket.onmessage = (payload) => {
            console.log('Message received');
            handleMessage(JSON.parse(payload.data));
        }

        webSocket.onclose = () => {
            console.log('Connection closed');
        }
    }, [webSocket, handleMessage]);

    return webSocket;
}

export default useSocket;

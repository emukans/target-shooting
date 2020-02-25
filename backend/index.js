const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8081 });

console.log('Server is listening on http://localhost:8081');

wss.on('connection', (ws) => {
    const terminate = setInterval(() => {
        const x = Math.round(Math.random() * 200 - 100);
        const y = Math.round(Math.random() * 200 - 100);
        const payload = {x, y};

        ws.send(JSON.stringify(payload));
    }, 3000);

    ws.on('message', (message) => {
        if (message === 'terminate') {
            clearInterval(terminate);
        }
    });
});

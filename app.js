var os = require('os');
var ip = '0.0.0.0';
var ips = os.networkInterfaces();
Object
    .keys(ips)
    .forEach(
        function (_interface) {
            ips[_interface]
                .forEach(
                    function (_dev) {
                        if (_dev.family === 'IPv4' && !_dev.internal) {
                            ip = _dev.address
                        }
                    }
                )
        }
    );
require('dotenv').config();
const express = require('express');

const app = express();
const site = process.env.site || 'unknown';
const port = process.env.port || 3000;
const ver = process.env.ag_ver || 'unknown';

app.get('/', (req, res) => {
    res.send(`<h1>Hello World ${site}, v1.0.5 ! .env version: ${ver}, Host IP: ${ip}, Port: ${port}</h1>`);
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});

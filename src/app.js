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

var http = require("http");
var port = 8084;

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.write(`<h1>Hello World AG! v3.0.2, Host IP: ${ip}, Port: ${port}</h1>`);
    res.end();
}).listen(port, "0.0.0.0");
const http = require('http');
const server = http.createServer((req, res)=>{
    res.write('07431813');
    res.end();
    console.log(req);
});

server.listen('');
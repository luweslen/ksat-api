import http from 'node:http';

const server = http.createServer(() => {

});

server.listen(3333, () => {
  console.log('KSAT API IS ONLINE IN PORT 3333')
});
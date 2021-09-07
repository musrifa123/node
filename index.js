const http = require('http')
// const hostname = '127.0.0.1'
const port=3005;
const server=http.createServer((req,res)=>
{
    res.end("hello")

});
server.listen(port,() =>{
    console.log('server running at http://localhost:$(port)/');
});
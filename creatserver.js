

// const http = require('http');

// const port = 3000;

// const server = http.createServer((req, res) => {
//   // res.statusCode = 200;
//   // res.setHeader('Content-Type', 'text/html');
//   res.end('');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const http=require('http');
const hostname = '127.0.0.1';
const port='5000';

const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    // res.write("hello you creat your server");
  res.end("djkhc");
  }
  if(req.url==='/about'){
    res.end("you are in about page");
  }
  res.end(`
  <h1>OOPS!</h1>
  <p>this page is not available</p>
  <a href="/">go back</a>
  `);
  
})
server.listen(port,hostname);

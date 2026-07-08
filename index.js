const _ = require('lodash'); 
const numbers = [1, 2, 3, 4, 5,6]; 
const sum = _.sum(numbers);  
console.log(`The sum of the numbers is: ${sum}`);
const http = require('http'); 
const hostname = '127.0.0.1';
const port = 3000;
 const server = http.createServer((req, res) => {  
res.statusCode = 200; 
res.setHeader('Content-Type', 'text/plain');
res.end('Hello from Node.js Server!'); });
server.listen(port, hostname, () => {   console.log(`Server running at http://${hostname}:${port}/`); });
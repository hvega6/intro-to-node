const http = require("http")

http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("hello world");
    res.end()
}).listen(3000, ()=>{
    console.log("Server running on port 3000")
})
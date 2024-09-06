// var http = require("http")
// var fs = require("fs")
// const server = http.createServer((req,res)=>{
//     const file = fs.readFileSync("./webpage/index.html","utf-8")
//    if(req.url === "/"){
//     res.write("<h1>HomePage</h1>")
//     res.write("HomePage")
//     res.write("HomePage")
//     res.end()
//    }else if(req.url === "/main"){
    
//     res.end(file)
//    } 
   
//    else if(req.url === "/about"){
//       res.write("About page");
//       res.end()
//    } else {
//     res.write("404 page not found")
//     res.end()
//    }
// })
// server.listen(4000,()=>{
//     console.log("server is running on port 4000")
// })

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    const extName = path.extname(filePath);
    
    // Default content type
    let contentType = 'text/html';

    // MIME types for different file extensions
    const mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript",
        ".jpg": "image/jpeg",
        ".png": "image/png",
    };

    // Set the content type based on the file extension
    contentType = mimeTypes[extName] || 'application/octet-stream';

    // Read the requested file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                // File not found, serve 404.html
                fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
                    res.writeHead(404, { "Content-Type": "text/html" });
                    res.end(data, "utf-8");
                });
            } else {
                // Some server error
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("Internal server error");
            }
        } else {
            // Success, serve the file
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data,"utf-8")
        }
    });
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});


const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        console.log("this is our slash page");
        res.end("This is our home page");
    }

    if (req.url == "/about") {
        console.log("this is our about page");
        res.end("This is our about page");
    }
});

server.listen(4000, () => {
    console.log("server is now started at the port 4000");
});
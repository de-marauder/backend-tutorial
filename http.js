const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/') {
        res.end("This is the home page")
        return
    }
    if (req.url === '/about') {
        res.end('This is the about page')
        return
    }

    res.end(`
        <h1>Oops</h1>
        <p>We can't find the page you requested</p>
        <a href='/'>Go back home</a>
    `)
});

server.listen(5000)
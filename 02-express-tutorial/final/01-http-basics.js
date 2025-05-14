const http= require('http');
const fs = require('fs');
const homePage = fs.readFileSync('./navbar-app/index.html');
const css = fs.readFileSync('./navbar-app/styles.css');
const logo = fs.readFileSync('./navbar-app/logo.svg');
const browser_js = fs.readFileSync('./navbar-app/browser-app.js');
// const favicon= fs.readFileSync('./navbar-app/favicon.ico');

const server = http.createServer((req,res)=>{
    //home
    if (req.url === '/'){
         res.writeHead(200,{'content-type' : 'text/html'})
         res.write(homePage)
         res.end()
    }
    //about

     else if (req.url === '/about'){
         res.writeHead(200,{'content-type' : 'text/html'})
         res.write(`<h1> This is about page </h1>
            <a href='/'>Home</a>`)
         res.end()
    }
    //css
    else if (req.url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(css)
        res.end()
    }
    //logo
     else if (req.url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(logo)
        res.end()
    }
    //browser_js
    else if (req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(browser_js)
        res.end()
    }
    
    //404
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.end(`<h1>incorrect searching</h1>`)
    }

    console.log(req.url)

})

server.listen(7000);

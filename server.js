const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(req.url)

    let body;
for(let i = 0; i<=4; i++) {
    switch(req.url) {

        case"/":
        body = fs.readFileSync(`./public/index.html`);
        break;
        case"/style.css":
        body = fs.readFileSync(`./public/style.css`);
        break;
        case"/main.js":
        body = fs.readFileSync(`./public/main.js`);
        break;
        case"/img/computer-apple3.jpg":
        body = fs.readFileSync(`./public/img/computer-apple3.jpg`);
        break;
        case"/img/computer.jpg":
        body = fs.readFileSync(`./public/img/computer.jpg`);
        break;
        case"/img/fon.jpg":
        body = fs.readFileSync(`./public/img/fon.jpg`);
        break;
        case"/img/Logo.jpg":
        body = fs.readFileSync(`./public/img/Logo.jpg`);
        break;
        
    }

}
    
    res.end(body)

})

const port = process.env.PORT || 3000
server.listen(port)

console.log('Server started!')
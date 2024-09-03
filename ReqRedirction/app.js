const exp = require("express");
const send = require("send");

const app = exp();

app.listen(200);

app.get('/', (req, res) =>{
    res.sendFile('./pages/index.html', {root: __dirname});
})  

app.get('/about', (req, res) =>{
    res.sendFile('./pages/about.html', {root: __dirname});
}) 

app.use((req, res) =>{
    res.sendFile('./pages/404.html', {root: __dirname});
})


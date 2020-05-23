const app = require('express')();

const clients = [
    {id:1 ,nome: 'BIA', telefone: '98765423456'},
    {id:2 ,nome: 'Vanessa', telefone: '98765423456'},
    {id:3 ,nome: 'BrunA', telefone: '98765423456'},
    {id:4 ,nome: 'Carla', telefone: '98765423456'},
]

//Retorna todos clients em json

app.get('/clients', (req, resp) => resp.json(clients))

app.listen(3032);
const app = require('express')();

const clients = [
    {id:1 ,nome: 'BIA', telefone: '98765423456'},
    {id:2 ,nome: 'Vanessa', telefone: '98765423456'},
    {id:3 ,nome: 'BrunA', telefone: '98765423456'},
    {id:4 ,nome: 'Carla', telefone: '98765423456'},
]

//Retorna todos clients em json

app.get('/clients', (req, resp) => resp.json(clients))

//Buscar  um unico  recurso

app.get('/clients/:id', (req, resp) => 
{
    const client = clients.filter( value => value.id == req.params.id);
    resp.json(client)
}
)

app.listen(3032);
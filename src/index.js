const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let clients = [
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


//Inserir dados no servidor -BD

app.post('/clients',(req, resp) => {
    const client = req.body;
    clients.push(client);
    resp.json(client);
} )


//Atuakizar nome do clientes

app.put('/clients/:id', (req, resp) => {
    const id = req.params.id;
    const nome = req.body.nome;

    let client = clients.filter(value => value.id == id);

    client[0].nome = nome;
    resp.json(client[0]);
})


app.delete('/clients/:id', (req, resp) => {
    const id = req.params.id;
     clients = clients.filter(value => value.id != id);
     resp.json(clients);
})

app.listen(3032);
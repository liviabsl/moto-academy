// const moduloA = require('./moduloA')

// function pegarValorIndex(){
//     const valorIndex = 20;
//     console.log(valorIndex)
// }

// moduloA.valorModuloA()

const express = require('express')

const app = express()

app.use(express.json())

let users = [
    {id: 1, name: "Euclides"},
    {id: 2, name: "Filipe"},
    {id: 3, name: "Elbesson"}
]

app.get("/", function(req, res){
    res.status(200).send(users)
})

app.get("/:id", function(req, res){
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id == id)
    if(user){
        res.status(200).json(user)
    }
    else{
        res.status(404).json({message: "Usuário nao encontrado"})
    }
})

app.post("/users", function(req, res){
    const {name} = req.body
    const id = users.length+1
    const newUser = {name, id}

    users.push(newUser)
    res.status(201).json(newUser)
})

app.delete("/user/:id", function(req, res){
    const id = parseInt(req.params.id)
    const users = users.filter(user => user.id != id)
    res.sendStatus(204)
})

app.put("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const {name} = req.body
    userIndex = users.findIndex(user => user.id === id)

    if(userIndex !== -1){
        users[userIndex].name = name
        res.json(users[userIndex])
    }
    else{
        res.status(404).json({message: "Usuário nao encontrado"})
    }
})

app.listen(3000)
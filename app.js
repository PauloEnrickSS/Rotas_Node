const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("servidor rodando na porta 8081")
})

app.get("/", function(req, res){
    res.send("Node js")
})

app.get("/cadastrar/:item/:carro/:quantidade", function(req, res){
    res.send("Item: " + req.params.item + 
    "<br>carro: "+ req.params.carro+
    "<br> quantidade: "+req.params.quantidade)
})

app.get("/contato", function(req, res){
    res.send("pagina de contato")
})

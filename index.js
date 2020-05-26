const express = require('express')
const app = express()
const routes = {
    nodes : require("./api/routes/nodes")
}
app.use("/nodes", routes.nodes)
var port = "9090";
app.listen(port, ()=>{
    console.log("Servidor está aberto na porta: "+port)
})
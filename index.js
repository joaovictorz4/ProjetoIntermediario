const express = require('express')
const app = express()

const routes = {
    node : require("./api/routers/node"),
    mob : require("./api/routers/mob"),
    lifeskill : require("./api/routers/lifeskill"),
    item : require("./api/routers/item"),
    classe : require("./api/routers/classe")
}


app.use("/node", routes.node)
app.use("/mob", routes.mob)
app.use("/lifeskill", routes.lifeskill)
app.use("/item", routes.item)
app.use("/classe", routes.classe)


var port = "9090";
app.listen(port, ()=>{
    console.log("Servidor está aberto na porta: "+port)
})
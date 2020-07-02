const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());

const routes = {
    node : require("./api/routers/node"),
    mob : require("./api/routers/mob"),
    lifeskill : require("./api/routers/lifeskill"),
    item : require("./api/routers/item"),
    classe : require("./api/routers/classe")
}


app.use("/api/node", routes.node)
app.use("/api/mob", routes.mob)
app.use("/api/lifeskill", routes.lifeskill)
app.use("/api/item", routes.item)
app.use("/api/classe", routes.classe)


var port = "9090";
app.listen(port, ()=>{
    console.log("Servidor está aberto na porta: "+port)
})
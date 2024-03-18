const server = require('./src/server')
const dbConnection = require('./src/config/dbConnection')

require('dotenv').config()
const PORT = process.env.PORT

dbConnection()
.then(()=> {
    server.listen(PORT, ()=> console.log("El servidor esta funcionando correctamente"))
}).catch((err) => console.log("tenemos problemas con la conexión a la DB", err.message))
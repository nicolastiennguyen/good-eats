import express from "express"
require('dotenv').config()
const app = express()
app.use(express.json())

import router from './routes'

app.use(router)

let PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
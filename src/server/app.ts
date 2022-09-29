import express from "express"
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
import router from './routes'

const { Client } = require('pg');

const client = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE
});

connect();
async function connect () {
  try {
    await client.connect()
    console.log('connected')
  } catch(e) {
    console.error(e)
  }
}

// app.use(router)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET")
  next()
})

app.get("/businesses", async (req, res) => {
  try {
    const results = await client.query("select * from businesses")
    res.json(results.rows)
  } catch(e) {
    console.log(e)
  }
})

app.post("/businesses", async (req, res) => {
  try {
    await client.query("INSERT INTO businesses VALUES ($1, $2, $3, $4, $5, $6, $7)", [req.body.id, req.body.name, req.body.image_url, req.body.url, req.body.rating, req.body.price, req.body.location])
  } catch(e) {
    console.log(e)
  }
})

let PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
const express = require("express")

const app = express();
// load config from env file

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// inroder to fetch json request bpdy

app.use(express.json());

// Importing routes for todo api

const TodoRoutes = require("./routes/Todo")
app.use("/api/v1",TodoRoutes)

// starting server
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})


// connecting to database

const dbConnect = require("./config/database")
dbConnect()

app.get("/",(request,response)=>{
    response.send(`<h1>This is Homepage Andy</h1>`)
})
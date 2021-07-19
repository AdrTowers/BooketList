const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const server = express();

server.use(express.json());        // use express.json to parse json data  
server.use(express.urlencoded({ extended: true })) // use express.urlencoded to parse incoming requests with payloads
server.use(cors());                // use cors to get requests from browsers


const url = 'mongodb+srv://cruduser:tyV5JOf5JSdVN4uW@cluster0.srsao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// checking db connection
const db = mongoose.connection;
db.once("open", _ => {
    console.log("Database connected:", url);
})

db.on("error", err => {
    console.error("connection error:", err)
})






// CRUD Handlers
// READ
server.get("/books", (req, res) => {
    res.send(books);
})







server.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})
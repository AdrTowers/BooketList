const express = require("express");
const cors = require("cors");
const mongoose = require("./models/db/mongoose");
const bookObj = require("./models/book");


const server = express();

server.use(express.json());        // use express.json to parse json data  
server.use(express.urlencoded({ extended: true })) // use express.urlencoded to parse incoming requests with payloads
server.use(cors());                // use cors to get requests from browsers



// CRUD Handlers
// READ method to return all books
server.get("/books", (req, res) => {
    bookObj.find({}).then((books) => {
        res.send(books);
    }).catch((err) => {
        res.status(500).send(err);
    })
})

// POST
server.post("/books", (req, res) => {
    // filtering to get only required fields and remove unnecessary ones
    const { title, author, description, isbn, categories, image_url, price, currencyCode, buy_url } = req.body;

    // using create method on the book object passing request's body
    bookObj.create(req.body).then((book) => {
        res.status(201).send({ status: "success" });
    }).catch((err) => {
        res.status(400).send(err);
    })
})

// DELETE using id param
server.delete("/books/:id", (req, res) => {

    bookObj.findByIdAndDelete(req.params.id).then(book => {
        if (!book) {
            return res.status(404).send();
        }
        res.send({ status: "success" });
    }).catch(err => {
        res.status(500).send(err);
        console.log(err);
    })
})


server.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})

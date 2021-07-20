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

// PUT
server.put("/books", (req, res) => {
    // extract param from the request
    const { _id } = req.query;

    // checking if the put request has _id
    if (_id === undefined) {
        return res.status(400).send({ message: "?_id required" });
    }

    bookObj.findOneAndUpdate(_id, req.body).then(book => {
        if (!book) {
            return res.status(404).send({ message: "no book with that _id found update" });
        }
        res.send({ status: "success" });
    })
        .catch(err => {
            res.status(500).send(err);
            console.log(err);
        })
})


// DELETE using id param
server.delete("/books", (req, res) => {
    // extract param from the request
    const { _id } = req.query;

    // checking if the put request has _id
    if (_id === undefined) {
        return res.status(400).send({ message: "?_id required" });
    }

    bookObj.findByIdAndDelete(_id).then(book => {
        if (!book) {
            return res.status(404).send({ message: "no book with that _id found delete" });
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

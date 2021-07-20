const express = require("express");
const cors = require("cors");
const mongoose = require("./models/db/mongoose");

const bookRoutes = require("./routes/bookRoutes");


const server = express();

server.use(express.json());        // use express.json to parse json data  
server.use(express.urlencoded({ extended: true })) // use express.urlencoded to parse incoming requests with payloads
server.use(cors());                // use cors to get requests from browsers

// blog routes
server.use(bookRoutes);





server.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})

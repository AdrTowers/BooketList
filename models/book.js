const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    isbn: String,
    edition: String,
    image_url: String,
    price: String,
    vendor_url: String
});

module.exports = mongoose.model("book", bookSchema);

const mongoose = require("mongoose");

const { Schema } = mongoose;

// defining schema for to store books
const bookSchema = new Schema({
    title: String,
    author: [String],
    description: String,
    isbn: String,
    categories: [String], 
    image_url: String,
    price: Number,
    currencyCode: String,
    buy_url: String
});

const bookObj = mongoose.model("book", bookSchema);    // converting bookSchema to a model and exporting for use

module.exports = bookObj;

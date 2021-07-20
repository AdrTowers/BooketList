const mongoose = require("mongoose");

// Mongo db
const connectionString = 'mongodb+srv://cruduser:tyV5JOf5JSdVN4uW@cluster0.srsao.mongodb.net/booketlist?retryWrites=true&w=majority'

mongoose.connect(connectionString, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log("DB connection successful");
    }).catch((error) => {
        console.log("connection error:", error);
    })

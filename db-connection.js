const mongoose = require("mongoose");
 const db = mongoose.connect("mongodb+srv://Rosalio:Rosalio791975@rosaliomorales.btcjciy.mongodb.net/stock-checker?retryWrites=true&w=majority"/*process.env.MONGO_URI*/, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}); 

module.exports = db;
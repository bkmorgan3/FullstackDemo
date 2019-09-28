const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokeSchema = new Schema({
    name: String
    
});

const Pokemon = mongoose.model("Pokemon", pokeSchema)
module.exports = Pokemon;
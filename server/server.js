const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = 3000;
const pokeController = require("./controllers/pokeController");
const config = require("../config/keys");


app.use(bodyParser.json())
// setup mongoose
mongoose.connect(config.MONGO_URI,() => {
    console.log("Connected to Mongoose")
})
// serve static files from this directory 
app.use("/public", express.static(path.join(__dirname,'../client/public')));
// when serving the root route, response is the html file in the public folder used in the static use dec, above.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
});

app.get("/pokemon", pokeController.getPokemon, (req,res) => {
    res.status(200).json(res.locals.data)
});
app.post("/pokemon", pokeController.makePokemon,(req, res) => {
    res.status(200).json()
})

// Route handler for all routes not in our app
app.use('*', (req, res) => {
    res.status(404).send('Page Not Found');
});

// global error handler 
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something went wrong');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
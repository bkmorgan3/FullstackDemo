const axios = require("axios");
const fetch = require("node-fetch");

const pokeController = {};

pokeController.getPokemon =  (req, res, next) => {
    //  console.log.("Inside get poke mon controller")
    const randomNum = Math.floor(Math.random() * 152)
     fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then(res => res.json())
        .then(data => {
            res.locals.data = data
            console.log("incoming data",res.locals.data.name)
            return next()
        })

    
}

module.exports = pokeController;



   
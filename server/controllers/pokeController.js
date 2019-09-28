const axios = require("axios");
const fetch = require("node-fetch");
const Pokemon = require("../models/pokemon");

const pokeController = {};

pokeController.getPokemon =  (req, res, next) => {
    //  console.log.("Inside get poke mon controller")
    const randomNum = Math.floor(Math.random() * 152)
     fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        .then(res => res.json())
        .then(data => {
            res.locals.data = data
            console.log(res.locals.data)
            return next()
        })

    
}

pokeController.makePokemon = (req, res, next) => {
    Pokemon.create({name: req.body.name}, (err, poker) => {
        if(err){
            console.log(err)
            return next({err: 'Error in makePokemon'})
        } else {
            console.log("pokemon created")
            return next()
        }
    })
}

module.exports = pokeController;



   
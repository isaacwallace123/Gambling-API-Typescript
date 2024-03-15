const router = require('express').Router();
const SeedDeck = require('./Utils/SeedDeck');
const GetSeed = require('./Utils/GetSeed');

// Seed based deck generation
const Routes = [
    {
        name: "Seed Deck",
        path: "/:seed(\\d+)",
        type: "GET",
        description: "This will generate a deck of cards using the seed inputted as a param in the URL.",
        example: SeedDeck(123),

        callback: (req, res) => {
            let Seed = Number(req.params.seed);
            Seed = Seed < 1 ? 1 : Seed;

            res.json(SeedDeck(Seed));
        },
    },
    {
        name: "Random Seed",
        path: "/",
        type: "GET",
        description: "This will generate a random seed that you could use for your seed generated deck of cards.",
        example: { seed: GetSeed() },

        callback: (req, res) => res.json({ seed: GetSeed() }),
    }
]

Routes.map((Service) => {
    router[Service.type.toLowerCase()](Service.path, Service.callback);
});

module.exports = {
    name: "Seed",
    services: [],
    
    router: router,
    routes: Routes
}
const router = require('express').Router();

const GetCards = require('./Utils/GetCards');
const GetSuits = require('./Utils/GetSuits');
const GenerateDeck = require('./Utils/GenerateDeck');
const RandomizeDeck = require('./Utils/RandomizeDeck');
const Seed = require('./Seed/Seed');

// Seed handler
router.use('/seed', Seed.router);

// All the routes
const Routes = [
    {
        name: "Random Deck",
        path: "/random",
        type: "GET",
        description: "In calling this method, the method will return a JSON array of card objects that will be randomly assorted as a deck.",
        example: RandomizeDeck(),
        
        callback: (req, res) => res.json(RandomizeDeck()),
    },
    {
        name: "Card Suits",
        path: "/suits",
        type: "GET",
        description: "This method will return all possible card suits.",
        example: GetSuits,
        
        callback: (req, res) => res.json(GetSuits),
    },
    {
        name: "List Of Cards",
        path: "/cards",
        type: "GET",
        description: "This method will return a JSON array of objects. Each object will represent a card. The object will have card label, and card values (For blackjack).",
        example: GetCards,

        callback: (req, res) => res.json(GetCards),
    },
    {
        name: "Sorted Deck",
        path: "/",
        type: "GET",
        description: "This will generate a perfectly organized deck of cards and return the array of objects",
        example: GenerateDeck(),
        
        callback: (req, res) => res.json(GenerateDeck()),
    },
]

Routes.map((Service) => {
    router[Service.type.toLowerCase()](Service.path, Service.callback);
});

module.exports = {
    name: "Deck",
    services: [Seed],

    router: router,
    routes: Routes
}
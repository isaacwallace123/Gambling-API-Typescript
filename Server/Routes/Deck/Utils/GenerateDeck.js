const Cards = require('./GetCards');
const Suits = require('./GetSuits');

module.exports = () => {
    let Deck = [];

    Cards.map((Data) => {
        Suits.map((Suit) => {
            Deck.push({
                Suit: Suit,
                Card: Data.Card,
                Values: Data.Values
            });
        });
    });

    return Deck;
};
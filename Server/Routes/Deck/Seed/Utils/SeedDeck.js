const CreateNewFullDeck = require('../../Utils/GenerateDeck');

module.exports = (Seed) => {
    let Deck = CreateNewFullDeck();

    let currentIndex = Deck.length, temporaryValue, randomIndex;

    let RandomFromSeed = () => {
        let x = Math.sin(Seed++) * 10000;
        return x - Math.floor(x);
    };

    while (0 !== currentIndex) {
        randomIndex = Math.floor(RandomFromSeed() * currentIndex);
        currentIndex -= 1;

        temporaryValue = Deck[currentIndex];
        Deck[currentIndex] = Deck[randomIndex];
        Deck[randomIndex] = temporaryValue;
    }

    return Deck;
}
const FullDeck = require('./GenerateDeck')();

module.exports = () => {
    return FullDeck.sort((a, b) => 0.5 - Math.random());
}
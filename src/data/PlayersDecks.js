import InitialDeck from './InitialDeck.js';

let deckUser = [],
    deckCpu = [],
    deckShuffle = InitialDeck;

//Shuffle the InitialDeck before dealing Cards
export function shuffle(a) {
    var j = 0;
    var valI = '';
    var valJ = valI;
    var l = a.length - 1;
    while (l > -1) {
        j = Math.floor(Math.random() * l);
        valI = a[l];
        valJ = a[j];
        a[l] = valJ;
        a[j] = valI;
        l -= 1;
    }
    return a;
}

//Split InitialDeck into two 'playersDecks'
function deal() {
    for (let i = 0, j = 26; i < 26 && j < 52; i++, j++) {
        deckUser.push(deckShuffle.data[i]);
        deckCpu.push(deckShuffle.data[j]);
    }
}

//Don't forget to shuffle InitialDeck and deal it before we can start to play
shuffle(deckShuffle.data);
deal();


delete require.cache[require.resolve('./InitialDeck.js')];

module.exports = {deckUser: deckUser, deckCpu: deckCpu};
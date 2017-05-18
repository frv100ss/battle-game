import InitialDeck from './../data/InitialDeck.js';
import expect from 'expect';
const data = InitialDeck.data[39];
const deck = InitialDeck.data;
const expected = {name : 'as-trèfle'};

const shuffle = (a) => {
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
};

const deck1 = [], deck2 = [];
let deckShuffle = InitialDeck;
deckShuffle = shuffle(deckShuffle);

const deal = () => {
    for (let i = 0, j = 26; i < 26 && j < 52; i++, j++) {
        deck1.push(deckShuffle.data[i]);
        deck2.push(deckShuffle.data[j]);
    }
};

describe('>>>InitialDeck', () => {
    it('the 39th card of the deck should be a As-trèfle', () => {
        expect(data).toInclude(expected);
    });
    it('+++As de trèfle should have a value of 14 and the correct name (as-trèfle)', () => {
        expect(data.value).toEqual(14);
        expect(data.name).toEqual('as-trèfle');
    });

    it('+++should have a length of 52', () => {
        expect(deck.length).toEqual(52);
    });

});

describe('>>> shuffle deck, we could be unlucky but... ', () => {
    it('+++the 39th card should\'nt be an as-trèfle this time', () => {
        shuffle(deck);
        expect(deck[39].name).toNotEqual('as-trèfle');    });
})

describe('>>> Deal Deck... ', () => {
    it('+++should have two deck with 26 cards ', () => {
        deal(deckShuffle);
        expect(deck1.length).toEqual(26);
        expect(deck2.length).toEqual(26);
    });
    it('+++deck1 and deck 2 should have different cards ', () => {
        const stringifyDeck1 = JSON.stringify(deck1);
        const stringifyDeck2 = JSON.stringify(deck2);
        expect(stringifyDeck1).toExclude(stringifyDeck2);
    });

})



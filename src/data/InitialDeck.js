const InitialDeck = [];

let color,
    value,
    name,
    nbCardPerColor = 13,
    i;

for(i = 1; i <= 52; i++) {
    value = i;

    if(i < nbCardPerColor)color="pique";
    else if(i> nbCardPerColor && i <= nbCardPerColor *2) {value-=nbCardPerColor; color="coeur"}
    else if(i> nbCardPerColor *2 && i <= nbCardPerColor *3) {value-=nbCardPerColor*2; color="carreau"}
    else if(i> nbCardPerColor *3 && i <= nbCardPerColor *4) {value-=nbCardPerColor*3; color="trèfle"};

    if(value===1) {value = 14; name = "as"}
    else if (value===11) {name = "valet"}
    else if (value===12) {name = "dame"}
    else if (value===13) {name = "roi"}
    else {name = value};

    InitialDeck.push({
        "name": name + '-' + color,
        "value" : value,
        "id" : i,
        "backgroundImage" : 'url(' + require('./../img/52_cards/' + name + '-' + color + '.jpg') + ')'
    });
}

module.exports = {data:InitialDeck};
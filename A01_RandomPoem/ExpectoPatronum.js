"use strict";
//Starte die Entwickertools und drücke F12
let sub = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let pra = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let obj = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
// console.log(sub);
// console.log(pra);
// console.log(obj);
for (let i = 5; i >= 0; i--) {
    let verse = getVerse(sub, pra, obj);
    console.log(verse);
}
function getVerse(_sub, _pra, _obj) {
    let subI = Math.floor(Math.random() * _sub.length);
    let praI = Math.floor(Math.random() * _pra.length);
    let objI = Math.floor(Math.random() * _obj.length);
    let poem = _sub[subI] + " " + _pra[praI] + " " + _obj[objI];
    _sub.splice(subI, 1);
    _pra.splice(praI, 1);
    _obj.splice(objI, 1);
    return poem;
}
//# sourceMappingURL=ExpectoPatronum.js.map
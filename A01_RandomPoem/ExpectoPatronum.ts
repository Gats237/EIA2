//Starte die Entwickertools und drücke F12
let sub: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
let pra: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
let obj: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

// console.log(sub);
// console.log(pra);
// console.log(obj);

for (let i: number = 5; i >= 0; i--) {
    let verse: string[] = getVerse(sub, pra, obj);
    console.log(verse);
        }

function getVerse (_sub: string[], _pra: string[], _obj: string[]): string[] {

    let subI: number = Math.floor(Math.random() * _sub.length);
    let praI: number = Math.floor(Math.random() * _pra.length);
    let objI: number = Math.floor(Math.random() * _obj.length);

    let poem: string = _sub[subI] + " " + _pra[praI] + " " + _obj[objI];

    _sub.splice(subI, 1);
    _pra.splice(praI, 1);
    _obj.splice(objI, 1);
    
    return poem: string ;
}

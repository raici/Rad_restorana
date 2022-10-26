alert('1 - Pileci fileti 7KM\n2 - Cevapi 7KM\n3 - Pizza 10KM');

 const izbor = parseInt(prompt('Unesite redni broj zeljenog jela'));
 const kolicina = parseInt(prompt('Unesite zeljenu kolicinu'));

let ukupno;
let ukupnoPDV;

switch(izbor){
    case 1:
        ukupno = 7 * kolicina; break;
    case 2:
        ukupno = 7 * kolicina; break;
    case 3:
        ukupno = 10 * kolicina; break;
    default: alert('redni broj nije validan'); break;
        
 }
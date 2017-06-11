/*Zadanie 1
Wyznacz najmniejszą i największą liczbę znajdującą się w liście
[40, 6, 91, 8, 1, 100, 4, 2]

a) nie uzywaj petli ani metod Array
b) uzyj metody Array
*/

//a)
const lista = [40, 6, 91, 8, 1, 100, 4, 2];
let minInt = Math.min.apply(null, lista);
let maxInt = Math.max.apply(null, lista);
console.log("Największa liczba to " + maxInt + ", a najmniejsza to " + minInt + ".");

//b)
const lista = [40, 6, 91, 8, 1, 100, 4, 2];
let minInt = lista[0];
let maxInt = lista[0];
lista.forEach (function (element, index, array) {
  if (element > maxInt) {
    maxInt = element;
  }
  else if (element < minInt) {
    minInt = element;
  }
});
console.log("Największa liczba to " + maxInt + ", a najmniejsza to " + minInt + ".");


/*Zadanie 2
    napisz funkcję, ktora przyjmuje dowolną liczbe parametrow.
    Funkcja powinna zwrocic lancoch znakow skaldajacy sie
    z typow poszczegolnych parametrow rozdzielonych znakami " :: "
    Przyklad
    fn('a', [3, 4], 35);
        outback: "string :: object :: number"
    fn(0, true);
        outback: "number :: boolean"
*/

function paramType () {
  const args = arguments;
  const argsLength = args.length;
  let outback = [];
    for (let i = 0; i < argsLength; i += 1) {
      outback.push(typeof args[i]);
    }
    return outback.join(" :: ");
}

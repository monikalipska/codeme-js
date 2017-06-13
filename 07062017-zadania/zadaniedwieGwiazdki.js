/*
    napisz jedna funkcje ktora moze przyjac
    1. jako parametr liste z liczbami
    2. dwa parametry okreslajace przedzial liczb calkowitych
    Funkcja powinna zwrocic wszystkie liczby pierwsze znajduj¹ce 
    sie w liscie Array lub z przedzialu okreslonego przez dwa parametry 
*/

/*
    nadal podkreslam wage styli kodowanie - ciezko sie czyta ten kod :(
*/
function liczbyPierwsze () {
  const args = arguments;
  // mozna uzyc juz args
  const lnArgs = args.length;
  let outback = [];

  function pomocnicza(i) {
    if(i < 2) return false;
    for (let j = 2; j < i; j += 1) {
        if (i % j === 0)
            return false;
    }
    return true;
  }
  
  // czy to sprawdzenie daje nam informacje ze mamy array - 
  // raczej tylko ze mamy podany jeden argument - 
  // jak podam przy wywolaniu np (3)
  // to walnie bledem
  // porownanie scisle ===
  if (Array.isArray(args[0])) {
      // czy mozna uzyc innej metody ? Jezeli tak - jakiej?
    args[0].forEach(function (element) {
     if (pomocnicza(element)) {
        outback.push(element);
      }
    }); // brak srednika moze prowadzic do powaznych bledow ;)
    return outback.join(",");
  }
  
// bardzo nieczytelne wyglada jak by else if bylo samodzielna instrukcja, brak scislego porownania
      // czy ta konstrukcja else if jest potrzeban ? ML: na koniec dałam opcję na else 
    // ML: można na początku zrobić sprawdzenie czy argumenty to array lub number, a potem po ilości argumentów np. ale nie wiem czy to dobry pomysł...
  else if (typeof args[0] === 'number' && typeof args[1] === 'number') {
    const minInt = args[0];
    const maxInt = args[1];
    for (let i = minInt; i <= maxInt; i += 1) {
      if (pomocnicza(i)) {
        outback.push(i);
      }
    }
    // dwa razy zwracasz to samo - celowo?
    return outback.join(",");
  }
  return "Podaj array lub przedział liczb"; // i na koniec opcja na else
}

/*
    napisz jedna funkcje ktora moze przyjac
    1. jako parametr liste z liczbami
    2. dwa parametry okreslajace przedzial liczb calkowitych
    Funkcja powinna zwrocic wszystkie liczby pierwsze znajduj¹ce 
    sie w liscie Array lub z przedzialu okreslonego przez dwa parametry 
*/

function liczbyPierwsze () {
  const args = arguments;
  const lnArgs = arguments.length;
  let outback = [];

  function pomocnicza(i) {
    if(i < 2) return false;
    for (let j = 2; j < i; j += 1) {
        if (i % j === 0)
            return false;
    }
    return true;
  }
  
  if (lnArgs == 1) {
    let outback = [];
    args[0].forEach(function (element, index) {
     if (pomocnicza(element)) {
        outback.push(element);
      }
    })
    return outback.join(",");
  }

  else if (lnArgs == 2) {
    const minInt = args[0];
    const maxInt = args[1];

    for (let i = minInt; i <= maxInt; i += 1) {
      if (pomocnicza(i)) {
        outback.push(i);
      }
    }
    return outback.join(",");
  }
}
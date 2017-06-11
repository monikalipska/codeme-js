/*
    do html z zadania-3 wstaw kolejny plik js
    z modulem w ktorym:
    do kazdego elementu li przypnij zdarzenie klikniecia
    w ktorym procedura wywolania zdarzenia wykona:
    1. zmieni kolor tla elementu li na #999999
    2. ustawi atrybut aria-selected="true"
*/

(function () {
  const ulList = document.querySelector('[role]');
  const liList = ulList.querySelectorAll('li');

  const view = {};

  [].forEach.call(liList, function (liList) {
    const name = liList.getAttribute('id');
    if (name) {
      view[name] = liList;
    }
  });

  view['tab-1'].addEventListener('mousedown', function (e) {
    view['tab-1'].style.backgroundColor = "#999999";
    view['tab-1'].setAttribute("aria-selected", "true");
  }, false);

  view['tab-2'].addEventListener('mousedown', function (e) {
    view['tab-2'].style.backgroundColor = "#999999";
    view['tab-2'].setAttribute("aria-selected", "true");
  }, false);

  view['tab-3'].addEventListener('mousedown', function (e) {
    view['tab-3'].style.backgroundColor = "#999999";
    view['tab-3'].setAttribute("aria-selected", "true");
  }, false);

  view['tab-4'].addEventListener('mousedown', function (e) {
    view['tab-4'].style.backgroundColor = "#999999";
    view['tab-4'].setAttribute("aria-selected", "true");
  }, false);

}());

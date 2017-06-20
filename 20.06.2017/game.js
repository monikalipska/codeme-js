(function () {
  const arkanoidWrapper = document.querySelector('#arkanoid');
  const wholeDoc = document.querySelector('html');
  console.log(arkanoidWrapper);

  const refElements = arkanoidWrapper.querySelectorAll('[ref]');
  console.log(refElements);
  const view = {};
  //const scoreList = [1, 3, 5];
  let lifes = 3;
  let score = 0;
	 
	function createView(wholeDocument) {
		const refElements = wholeDocument.querySelectorAll('[ref]');
		[].forEach.call(refElements, function (refElement) {
			const name = refElement.getAttribute('ref');
			if (name) {
				view[name] = refElement;
			}
		});
	}
	createView(wholeDoc);
	console.log(view.score);
  /*[].forEach.call(refElements, function (refElement) {
    const name = refElement.getAttribute('ref');
    if (name) {
      view[name] = refElement;
    }
  });*/

  view.lifes.innerHTML = lifes;
  view.score.innerHTML = score;

  const div = document.createElement('div');
  div.classList.add('brick');

  /*for (let i = 1; i <= 30; i += 1) {
    const clone = div.cloneNode(true);
    clone.setAttribute("data-score", scoreList[Math.floor(Math.random() * 3)]);
    view.bricks.appendChild(clone);
  }*/

  const arenaRect = view.arena.getBoundingClientRect();
  const paddleTop = view.paddle.offsetTop;
  const paddleWidth = view.paddle.offsetWidth + 2;
  const ballDiameter = view.ball.offsetHeight;
  const paddleBoomY = paddleTop + ballDiameter;

  let paddleLeft;
  let ballTop;
  let ballLeft;
  let deltaX;
  let deltaY;
  let timeUID;

  reset();

  function startBall() {
    timeUID = setInterval(function () {
      ballTop += 1 * deltaY;
      ballLeft += 1 * deltaX;
      view.ball.style.top = ballTop + 'px';
      view.ball.style.left = ballLeft + 'px';
      if (paddleLeft <= ballLeft
        && paddleLeft + paddleWidth >= ballLeft
        && ballTop > paddleTop - ballDiameter) {
        deltaY = -1;
      } else if (ballTop >= arenaRect.height - ballDiameter) {
        deltaY = -1;
        lifes -= 1;
        view.lifes.innerHTML = lifes;
        if (lifes === 0) {
          clearInterval(timeUID);
          window.alert('game over');
          reset();
          return;
        }
      } else if (ballTop <= 0) {
        deltaY = 1;
      }
      if (ballLeft >= arenaRect.width - ballDiameter) {
        deltaX = -1; // cos sie wali na pierwszej krawedzi, przemyslec co mozna udoskonalic
      } else if (ballLeft <= 0) {
        deltaX = 1;
      }

    }, 1000 / 500);
  }

  function onMouseDown(e) {
    document.addEventListener('mousemove', onMouseMove, false);
    startBall();
  }

  function onMouseMove(e) {
    const x = e.pageX;
    if (arenaRect.left < x) {
      if (x < arenaRect.right - paddleWidth) {
        paddleLeft = x - arenaRect.left;
      } else {
        paddleLeft = arenaRect.width - paddleWidth + 'px';
      }
    }
    view.paddle.style.left = paddleLeft + 'px';
  }

  function stopGame(e) {
    document.removeEventListener('mousemove', onMouseMove, false);
  }

  view.paddle.addEventListener('mousedown', onMouseDown, false);
  view.paddle.addEventListener('mouseup', stopGame, false);

  document.documentElement.addEventListener('click', stopGame, false);

  function reset() {
    stopGame();
    lifes = 3;
    score = 0;
    view.lifes.innerHTML = lifes;
    view.score.innerHTML = score;

    paddleLeft = ((arenaRect.width - paddleWidth) / 2);
    ballTop = (paddleTop - ballDiameter);
    ballLeft = paddleLeft + ((paddleWidth - ballDiameter) / 2);
    deltaX = -1;
    deltaY = -1;

    view.paddle.style.left = paddleLeft + 'px';
    view.ball.style.top = ballTop + 'px';
    view.ball.style.left = ballLeft + 'px';
  }
  
  function createBricks() {
    const args = arguments;
	let numberOfBricks = args[0] || 30;
	let scoreList = args[1] || [1, 3, 5];
	  for (let i = 1; i <= numberOfBricks; i += 1) {
        const clone = div.cloneNode(true);
	    clone.setAttribute("data-score", scoreList[Math.floor(Math.random() * 3)]);
	    view.bricks.appendChild(clone);
	}
  }
  createBricks(20, [3, 5, 7]);

}());

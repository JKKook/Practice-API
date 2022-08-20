// 랜덤 숫자 형성
let randomNumber = Math.floor(Math.random() * 100) + 1;

//  변수 설정
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField"); // input

let guessCount = 1;
let resetButton;

// 숫자 게임 메인
function checkGuess() {
  // 인풋 값을 변수로 만들어 줌
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent += userGuess + "|";

  if (userGuess === randomNumber) {
    lastResult.textContent = "🎉congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!💩";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }
  guessCount++;
  guessField.value = "";
  //   guesses 속성 값
  //   guesses.textContent = "cheer up";
  //   guesses.style.backgroundColor = "yellow";
  //   guesses.style.fontSize = "100%";
  //   guesses.style.padding = "10px";
  //   guesses.style.boxShadow = "3px 3px 6px black";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

// 게임 기능 마무리
// disabled = true
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  resetButton.style.backgroundColor = "lightgray";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

//  복습 필요!!!

function resetGame() {
  // 카운트를 다시 첨으로 돌림!
  guessCount = 1;
  // resetParas에 있는 모든 것들을 지워 버림!
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  //양식 요소를 다시 활성화하고, 입력칸을 비운 후 포커스를 부여해서 새로운 숫자 입력 받을 준비!
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  // 배경색 제거
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

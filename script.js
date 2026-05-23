let randomNumber = Math.floor(Math.random() * 100) + 1;
let lives = 7;
let score = 100;
let gameOver = false;

function checkGuess() {
  if (gameOver) return;

  const input = document.getElementById("guessInput");
  const guess = Number(input.value);
  const message = document.getElementById("message");
  const hint = document.getElementById("hint");

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "⚠️ 1 se 100 ke beech number daalo!";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = "🎉 Winner! Sahi number pakad liya!";
    hint.textContent = `Final Score: ${score} ⭐`;
    gameOver = true;
    document.body.style.background = "radial-gradient(circle, #16a34a, #052e16)";
    return;
  }

  lives--;
  score -= 10;

  document.getElementById("lives").textContent = lives;
  document.getElementById("score").textContent = score;

  const difference = Math.abs(randomNumber - guess);

  if (guess < randomNumber) {
    message.textContent = "📉 Too Low! Thoda bada socho";
  } else {
    message.textContent = "📈 Too High! Thoda chhota socho";
  }

  if (difference <= 5) {
    hint.textContent = "🔥 Bahut close ho!";
  } else if (difference <= 15) {
    hint.textContent = "😎 Close ho, try again!";
  } else {
    hint.textContent = "🥶 Door ho abhi!";
  }

  if (lives === 0) {
    message.textContent = "💀 Game Over!";
    hint.textContent = `Correct number tha: ${randomNumber}`;
    gameOver = true;
    document.body.style.background = "radial-gradient(circle, #dc2626, #450a0a)";
  }

  input.value = "";
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  lives = 7;
  score = 100;
  gameOver = false;

  document.getElementById("lives").textContent = lives;
  document.getElementById("score").textContent = score;
  document.getElementById("message").textContent = "Game start karo 🚀";
  document.getElementById("hint").textContent = "Hint yaha milega...";
  document.getElementById("guessInput").value = "";

  document.body.style.background = "radial-gradient(circle, #1e3a8a, #020617)";
}
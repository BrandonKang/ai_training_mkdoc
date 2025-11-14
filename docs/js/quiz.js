document.addEventListener('DOMContentLoaded', function () {
  // Timer logic (if you already have it, keep your code)
  let timeLeft = 90;
  const timerText = document.getElementById('timer-text');
  const timerBar = document.getElementById('timer-bar');
  function updateTimer() {
    if (timeLeft >= 0) {
      timerText.textContent = timeLeft;
      timerBar.style.width = (timeLeft / 90 * 100) + '%';
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      document.getElementById('submit-quiz').disabled = true;
    }
  }
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);

  // Quiz grading logic
  document.getElementById('submit-quiz').addEventListener('click', function () {
    let score = 0;
    let total = 10;
    for (let i = 1; i <= total; i++) {
      const block = document.querySelector(`.question-item:nth-of-type(${i}) .quiz-block`);
      const correct = block.getAttribute('data-correct');
      const selected = block.querySelector('input[type="radio"]:checked');
      const resultDiv = block.querySelector('.quiz-result');
      if (selected && selected.value === correct) {
        score++;
        resultDiv.textContent = '✔️ Correct';
        resultDiv.style.color = 'green';
      } else {
        resultDiv.textContent = '❌ Incorrect';
        resultDiv.style.color = 'red';
      }
    }
    document.getElementById('final-score').textContent = `Score: ${score} / ${total}`;
    document.getElementById('pass-message').textContent = score >= 7 ? '🎉 Passed!' : '❌ Try Again!';
  });
});

// ================================
// QUIZ ENGINE - Material for MkDocs compatible
// ================================

// Shuffle utility
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Use md-content-load (NOT DOMContentLoaded)
document.addEventListener("md-content-load", () => {

  // ------------------------
  // Shuffle question items
  // ------------------------
  const quizContainer = document.getElementById("quiz-container");
  if (quizContainer) {
    const items = Array.from(quizContainer.querySelectorAll(".question-item"));
    const shuffled = shuffle(items);
    quizContainer.innerHTML = "";
    shuffled.forEach(i => quizContainer.appendChild(i));
  }

  // ------------------------
  // Timer
  // ------------------------
  const TIME_LIMIT = 90;
  let remaining = TIME_LIMIT;

  const timerBar = document.getElementById("timer-bar");
  const timerText = document.getElementById("timer-text");

  const timerInterval = setInterval(() => {
    remaining--;
    const percent = (remaining / TIME_LIMIT) * 100;

    if (timerBar) timerBar.style.width = percent + "%";
    if (timerText) timerText.innerHTML = remaining + "s";

    if (remaining <= 0) {
      clearInterval(timerInterval);
      finishQuiz();
    }
  }, 1000);

  // ------------------------
  // Submit
  // ------------------------
  const submitBtn = document.getElementById("submit-quiz");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      finishQuiz();
      clearInterval(timerInterval);
    });
  }

  // ------------------------
  // Score Calculation
  // ------------------------
  function finishQuiz() {
    const quizBlocks = document.querySelectorAll(".quiz-block");
    let score = 0;
    let total = quizBlocks.length;

    quizBlocks.forEach(block => {
      const correct = block.dataset.correct;
      const selected = block.querySelector("input[type=radio]:checked");

      const result = block.querySelector(".quiz-result");

      if (!selected) {
        result.innerHTML = "No answer selected.";
        result.style.color = "#d50000";
        return;
      }

      if (selected.value === correct) {
        result.innerHTML = "✓ Correct!";
        result.style.color = "#00c853";
        score++;
      } else {
        result.innerHTML = `✗ Incorrect (Correct: ${correct})`;
        result.style.color = "#d50000";
      }
    });

    const final = document.getElementById("final-score");
    const passMsg = document.getElementById("pass-message");

    if (final) final.innerHTML = `Your Score: ${score} / ${total}`;

    if (score >= Math.ceil(total * 0.7)) {
      passMsg.innerHTML = "🎉 You Passed!";
      passMsg.style.color = "#00c853";
    } else {
      passMsg.innerHTML = "Try Again!";
      passMsg.style.color = "#d50000";
    }
  }
});

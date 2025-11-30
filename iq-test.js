document.addEventListener("DOMContentLoaded", () => {
  const testContainer = document.getElementById("test-container");
  const startBtn = document.getElementById("start-btn");
  const progressText = document.getElementById("progress-text");

  let currentQuestionIndex = 0;
  let score = 0;
  let questions = [];

  // Завантажуємо питання з JSON
  fetch('data/questions.json')
    .then(response => response.json())
    .then(data => {
      questions = data;
    })
    .catch(err => {
      testContainer.innerHTML = "<p>Помилка завантаження питань.</p>";
      console.error(err);
    });

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    showQuestion();
  });

  function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
      showResult();
      return;
    }

    const q = questions[currentQuestionIndex];
    testContainer.innerHTML = `
      <h2>Питання ${currentQuestionIndex + 1}/${questions.length}</h2>
      <p>${q.question}</p>
      <div id="options">
        ${q.options.map((opt, idx) => `<button class="option-btn" data-answer="${opt}">${opt}</button>`).join('')}
      </div>
    `;

    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-answer");
        if (selected === q.answer) {
          score += 1;
        }
        currentQuestionIndex += 1;
        showQuestion();
      });
    });

    // Прогрес
    if(progressText) progressText.textContent = `Прогрес: ${currentQuestionIndex}/${questions.length}`;
  }

  function showResult() {
    const iq = calculateIQ(score, questions.length);
    const percentile = calculatePercentile(iq);

    testContainer.innerHTML = `
      <h2>Результат тесту</h2>
      <p>Ваш IQ: <strong>${iq}</strong></p>
      <p>Процентиль: <strong>${percentile}%</strong></p>
      <p>${getResultMessage(iq)}</p>
      <button id="restart-btn">Пройти ще раз</button>
    `;

    const restartBtn = document.getElementById("restart-btn");
    restartBtn.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      startBtn.style.display = "block";
      testContainer.innerHTML = "";
    });
  }

  function calculateIQ(score, total) {
    // Проста шкала: 70 + (score/total)*60
    return Math.round(70 + (score / total) * 60);
  }

  function calculatePercentile(iq) {
    // Простий приклад: 50% базовий
    return Math.min(99, Math.max(1, Math.round((iq - 70) / 60 * 100)));
  }

  function getResultMessage(iq) {
    if(iq < 85) return "Нижче середнього рівня інтелекту";
    if(iq < 115) return "Середній рівень інтелекту";
    if(iq < 130) return "Вищий за середній рівень інтелекту";
    return "Високий рівень інтелекту";
  }
});

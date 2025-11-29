document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language.slice(0, 2);
    document.getElementById("title").textContent = t(userLang, "welcome");
    document.getElementById("start-btn").textContent = t(userLang, "start");

    const questions = [
        {
            q: "Which number comes next? 2, 4, 8, 16, 32, ?",
            options: ["48", "54", "64", "72"],
            answer: 2
        },
        {
            q: "Which doesn’t belong? Dog, Cat, Car, Horse?",
            options: ["Dog", "Cat", "Car", "Horse"],
            answer: 2
        }
    ];

    const startBtn = document.getElementById("start-btn");
    const container = document.getElementById("test-container");

    let current = 0;
    let score = 0;

    startBtn.onclick = () => loadQuestion();

    function loadQuestion() {
        startBtn.style.display = "none";
        const q = questions[current];

        container.innerHTML = `
            <h2>${q.q}</h2>
            ${q.options
                .map((opt, i) => `<button onclick="checkAnswer(${i})">${opt}</button>`)
                .join("")}
        `;
    }

    window.checkAnswer = (i) => {
        if (i === questions[current].answer) score++;
        current++;

        if (current < questions.length) loadQuestion();
        else showResult();
    };

    function showResult() {
        const iq = Math.round(90 + score * 20);
        container.innerHTML = `<h2>Your IQ Score: ${iq}</h2>`;
    }
});

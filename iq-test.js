document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const testContainer = document.getElementById("test-container");
    const userLang = navigator.language.slice(0, 2) || 'en';

    document.querySelector("h1").textContent = t(userLang, "welcome");
    startBtn.textContent = t(userLang, "start");

    const questions = [
        {
            q: "Which number comes next in the series? 2, 4, 8, 16, 32, ?",
            options: ["48", "54", "64", "72"],
            answer: 2
        },
        {
            q: "What is the missing shape?",
            options: ["Circle", "Triangle", "Square", "Pentagon"],
            answer: 1
        },
        {
            q: "Which word does NOT belong to the group: Dog, Cat, Car, Horse?",
            options: ["Dog", "Cat", "Car", "Horse"],
            answer: 2
        },
        {
            q: "What is 15% of 200?",
            options: ["15", "20", "25", "30"],
            answer: 2
        },
        {
            q: "Find the next number: 1, 1, 2, 3, 5, 8, ?",
            options: ["13", "14", "15", "18"],
            answer: 0
        }
    ];

    let current = 0;
    let score = 0;

    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        loadQuestion();
    });

    function loadQuestion() {
        const q = questions[current];

        testContainer.innerHTML = `
            <div class="question-block">
                <h2>Question ${current + 1} of ${questions.length}</h2>
                <p>${q.q}</p>
                <div id="options"></div>
            </div>
        `;

        const optionsDiv = document.getElementById("options");

        q.options.forEach((opt, index) => {
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.addEventListener("click", () => checkAnswer(index));
            optionsDiv.appendChild(btn);
        });
    }

    function checkAnswer(selected) {
        if (selected === questions[current].answer) {
            score++;
        }

        current++;

        if (current < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        const iqScore = Math.round(80 + (score / questions.length) * 40);

        testContainer.innerHTML = `
            <div class="result">
                <h2>Your Result</h2>
                <p>You answered correctly: <strong>${score}</strong> out of <strong>${questions.length}</strong></p>
                <h3>Your Estimated IQ: <span style="color:green;">${iqScore}</span></h3>
            </div>
        `;
    }
});

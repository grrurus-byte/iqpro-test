document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const title = document.getElementById("title");
    const testContainer = document.getElementById("test-container");
    const userLang = navigator.language.slice(0,2) || "en";

    title.textContent = t(userLang, "welcome");
    startBtn.textContent = t(userLang, "start");

    const questions = [
        { q: "2 + 2 = ?", options: ["3","4","5"], answer: "4" },
        { q: "5 - 3 = ?", options: ["1","2","3"], answer: "2" },
        { q: "3 * 2 = ?", options: ["5","6","7"], answer: "6" },
        { q: "10 / 2 = ?", options: ["4","5","6"], answer: "5" }
    ];

    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        let currentQuestion = 0;
        let score = 0;

        function showQuestion(qIndex) {
            const q = questions[qIndex];
            testContainer.innerHTML = `<p>${t(userLang,"questionPrefix")} ${qIndex+1}: ${q.q}</p>`;
            q.options.forEach(option => {
                const btn = document.createElement("button");
                btn.textContent = option;
                btn.addEventListener("click", () => {
                    if(option === q.answer) score++;
                    if(currentQuestion < questions.length - 1){
                        currentQuestion++;
                        showQuestion(currentQuestion);
                    } else {
                        testContainer.innerHTML = `<h2>${t(userLang,"result")}: ${score} / ${questions.length}</h2>`;
                    }
                });
                testContainer.appendChild(btn);
            });
        }

        showQuestion(currentQuestion);
    });
});

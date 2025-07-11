let currentQuiz = [];
let userAnswers = [];

function initQuiz(courseKey) {
  currentQuiz = quizzes[courseKey] || [];
  userAnswers = [];

  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  currentQuiz.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");

    let html = `<p><strong>Q${i + 1}:</strong> ${q.question}</p>`;
    q.choices.forEach((choice, idx) => {
      html += `
        <label>
          <input type="radio" name="q${i}" value="${idx}" />
          ${choice}
        </label><br/>
      `;
    });

    div.innerHTML = html;
    container.appendChild(div);
  });
}

function getQuizScore() {
  let score = 0;

  currentQuiz.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  return score;
}

function getQuizTotal() {
  return currentQuiz.length;
}

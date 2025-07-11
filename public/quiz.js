function loadQuiz(questions) {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';

  questions.forEach((q, i) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.innerHTML = `<p>${i + 1}. ${q.question}</p>`;

    q.options.forEach((opt, idx) => {
      const label = document.createElement('label');
      label.innerHTML = `
        <input type="radio" name="q${i}" value="${idx}" />
        ${opt}
      `;
      questionDiv.appendChild(label);
    });

    container.appendChild(questionDiv);
  });

  document.getElementById('submitQuizBtn').onclick = () => {
    let score = 0;
    questions.forEach((q, i) => {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected && parseInt(selected.value) === q.answer) {
        score++;
      }
    });

    const result = document.getElementById('quizResult');
    result.textContent = `You scored ${score} out of ${questions.length}.`;
  };
}

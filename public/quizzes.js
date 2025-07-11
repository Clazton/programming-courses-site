// public/quizzes.js
window.quizData = {
  course1: [
    {
      question: "What is the type of `name = 'Alice'`?",
      options: ["Integer", "String", "Boolean"],
      answer: 1,
      explanation: "Because it's enclosed in quotes, it's a string."
    },
    // add 2–3 more questions
  ],
  course2: [
    {
      question: "What does `typeof null` return in JS?",
      options: ["'object'", "'null'", "'undefined'"],
      answer: 0,
      explanation: "`typeof null` incorrectly returns 'object'."
    }
    // etc.
  ],
  // similarly for courses 3–5...
};

// Simple login credentials
const USER = "admin";
const PASS = "1234";

const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginError = document.getElementById("loginError");

// Modal elements
const courseModal = document.getElementById("courseModal");
const courseTitle = document.getElementById("courseTitle");
const courseContent = document.getElementById("courseContent");
const closeModalBtn = document.getElementById("closeModal");
const quizBtn = document.getElementById("quizBtn");
const quizSection = document.getElementById("quizSection");
const quizForm = document.getElementById("quizForm");
const submitQuizBtn = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quizResult");

let currentCourse = null;

// Course content & quiz data
const courses = {
  "html-css": {
    title: "HTML & CSS Fundamentals",
    content: `
      <h3>Course Content</h3>
      <p>Learn semantic HTML5, structure, styling, Flexbox, Grid, and responsive design.</p>
      <ul>
        <li>HTML tags and attributes</li>
        <li>CSS selectors and properties</li>
        <li>Flexbox & Grid layouts</li>
        <li>Responsive web design</li>
        <li>Animations with CSS</li>
      </ul>`,
    quiz: [
      {
        q: "What does HTML stand for?",
        a: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
      },
      {
        q: "Which CSS property controls the text color?",
        a: ["font-style", "color", "text-decoration"],
        correct: 1
      }
    ]
  },
  "javascript": {
    title: "JavaScript Essentials",
    content: `
      <h3>Course Content</h3>
      <p>Basics of JavaScript, variables, functions, ES6+, asynchronous code, and DOM manipulation.</p>
      <ul>
        <li>Variables and data types</li>
        <li>Functions and scope</li>
        <li>ES6+ features (let, const, arrow functions)</li>
        <li>Promises and async/await</li>
        <li>DOM manipulation and events</li>
      </ul>`,
    quiz: [
      {
        q: "Which keyword is used to declare a variable with block scope?",
        a: ["var", "let", "const"],
        correct: 1
      },
      {
        q: "What does 'async/await' help with?",
        a: ["Synchronous code", "Asynchronous code handling", "CSS styling"],
        correct: 1
      }
    ]
  },
  "python": {
    title: "Python Programming",
    content: `
      <h3>Course Content</h3>
      <p>Python syntax, control structures, data structures, OOP, and file handling.</p>
      <ul>
        <li>Variables and types</li>
        <li>Conditional statements</li>
        <li>Lists, tuples, dictionaries</li>
        <li>Functions and classes</li>
        <li>Reading and writing files</li>
      </ul>`,
    quiz: [
      {
        q: "Which symbol is used for comments in Python?",
        a: ["//", "#", "<!-- -->"],
        correct: 1
      },
      {
        q: "What is the output of: print(2 ** 3)?",
        a: ["6", "8", "9"],
        correct: 1
      }
    ]
  },
  "react": {
    title: "React.js Development",
    content: `
      <h3>Course Content</h3>
      <p>React components, hooks, state, routing, and SPA architecture.</p>
      <ul>
        <li>JSX syntax</li>
        <li>Functional components & hooks</li>
        <li>State & props</li>
        <li>React Router basics</li>
        <li>Building SPA</li>
      </ul>`,
    quiz: [
      {
        q: "What hook is used to manage state in functional components?",
        a: ["useEffect", "useState", "useContext"],
        correct: 1
      },
      {
        q: "JSX is a syntax extension for?",
        a: ["JavaScript", "HTML", "CSS"],
        correct: 0
      }
    ]
  },
  "nodejs": {
    title: "Node.js & Express",
    content: `
      <h3>Course Content</h3>
      <p>Backend development with Node.js and Express.js, routing, middleware, and REST APIs.</p>
      <ul>
        <li>Node.js basics</li>
        <li>Express routing</li>
        <li>Middleware functions</li>
        <li>RESTful APIs</li>
        <li>Database basics (MongoDB)</li>
      </ul>`,
    quiz: [
      {
        q: "Which method defines a route in Express?",
        a: ["app.get()", "app.route()", "app.listen()"],
        correct: 0
      },
      {
        q: "Middleware functions have access to?",
        a: ["Request object", "Response object", "Both request and response"],
        correct: 2
      }
    ]
  }
};

// Login logic
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === USER && password === PASS) {
    loginError.textContent = "";
    loginPage.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    loginError.textContent = "Invalid username or password";
  }
});

// Logout logic
logoutBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  loginPage.classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  loginError.textContent = "";
  closeCourseModal();
});

// Start Course buttons
document.querySelectorAll(".start-course-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const courseKey = e.target.closest(".course").getAttribute("data-course");
    openCourseModal(courseKey);
  });
});

// Open course modal and load content
function openCourseModal(courseKey) {
  currentCourse = courses[courseKey];
  courseTitle.textContent = currentCourse.title;
  courseContent.innerHTML = currentCourse.content;
  quizBtn.classList.remove("hidden");
  quizSection.classList.add("hidden");
  quizResult.textContent = "";
  courseModal.classList.remove("hidden");
  window.scrollTo(0, 0);
}

// Close modal
closeModalBtn.addEventListener("click", closeCourseModal);
function closeCourseModal() {
  courseModal.classList.add("hidden");
  quizSection.classList.add("hidden");
  quizResult.textContent = "";
  quizForm.innerHTML = "";
}

// Show quiz on button click
quizBtn.addEventListener("click", () => {
  quizBtn.classList.add("hidden");
  quizSection.classList.remove("hidden");
  loadQuiz(currentCourse.quiz);
});

// Load quiz questions
function loadQuiz(questions) {
  quizForm.innerHTML = "";
  questions.forEach((q, i) => {
    const questionElem = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = `${i + 1}. ${q.q}`;
    questionElem.appendChild(label);

    q.a.forEach((answer, idx) => {
      const optionId = `q${i}_opt${idx}`;
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${i}`;
      input.value = idx;
      input.id = optionId;

      const optionLabel = document.createElement("label");
      optionLabel.htmlFor = optionId;
      optionLabel.textContent = answer;

      questionElem.appendChild(input);
      questionElem.appendChild(optionLabel);
    });

    quizForm.appendChild(questionElem);
  });
  quizResult.textContent = "";
}

// Submit quiz and show results
submitQuizBtn.addEventListener("click", () => {
  const answers = currentCourse.quiz;
  let score = 0;
  let answeredAll = true;

  for (let i = 0; i < answers.length; i++) {
    const selected = quizForm[`question${i}`].value;
    if (selected === undefined) {
      answeredAll = false;
      break;
    }
    if (parseInt(selected) === answers[i].correct) {
      score++;
    }
  }

  if (!answeredAll) {
    alert("Please answer all questions!");
    return;
  }

  quizResult.textContent = `You scored ${score} out of ${answers.length}!`;
});

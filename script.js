const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginError = document.getElementById('loginError');
const courseModal = document.getElementById('courseModal');
const closeModalBtn = document.getElementById('closeModal');
const courseTitleEl = document.getElementById('courseTitle');
const courseContentEl = document.getElementById('courseContent');
const quizBtn = document.getElementById('quizBtn');
const quizSection = document.getElementById('quizSection');
const quizForm = document.getElementById('quizForm');
const submitQuizBtn = document.getElementById('submitQuiz');
const quizResult = document.getElementById('quizResult');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const USERNAME = 'admin';
const PASSWORD = '1234';

const courses = {
  'html-css': {
    title: "HTML & CSS Fundamentals",
    content: `
HTML Basics
HTML is the language used to structure webpages. It uses tags to organize content.

1. HTML Document Structure
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

This is a simple HTML page with a heading and a paragraph.

2. Common HTML Tags
<h1>...</h1> to <h6>...</h6>: Headings
<p>...</p>: Paragraphs
<a href="url">...</a>: Links
<img src="image.jpg" alt="description">: Images
<ul>, <ol>, <li>: Lists

3. Example: Creating a Link
<a href="https://www.example.com">Visit Example</a>

4. CSS Basics
CSS is used to style and layout webpages. It controls colors, fonts, spacing, and more.

5. CSS Syntax
selector {
  property: value;
}

Example: To make all paragraphs red:

p {
  color: red;
}

6. Common Properties
color: Text color
background-color: Background color
font-size: Text size
margin: Space outside elements
padding: Space inside elements

7. Example: Styling a Button
button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

8. Practice
Create a simple webpage with headings, paragraphs, links, and style them with CSS!
    `,
    quiz: [
      {
        q: "What does HTML stand for?",
        a: [
          "HyperText Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language"
        ],
        correct: 0
      },
      {
        q: "Which tag creates a hyperlink?",
        a: ["<a>", "<link>", "<href>"],
        correct: 0
      },
      {
        q: "Which CSS property changes text color?",
        a: ["font-style", "color", "text-decoration"],
        correct: 1
      }
    ]
  },

  javascript: {
    title: "JavaScript Essentials",
    content: `
JavaScript Basics
JavaScript adds interactivity to webpages, letting you create dynamic content.

1. Variables and Data Types
let name = "Alice";    // String
let age = 25;          // Number
let isStudent = true;  // Boolean

2. Functions
function greet() {
  alert("Hello, World!");
}
greet();

3. Events
JavaScript can respond to user actions like clicks.

button.addEventListener('click', () => {
  alert('Button clicked!');
});

4. Practice
Create a button that shows an alert when clicked.
    `,
    quiz: [
      {
        q: "Which keyword declares a variable with block scope?",
        a: ["var", "let", "const"],
        correct: 1
      },
      {
        q: "What does the function 'alert()' do?",
        a: ["Shows a popup message", "Logs to console", "Changes HTML content"],
        correct: 0
      },
      {
        q: "How do you add an event listener to a button click?",
        a: [
          "button.onClick = function() {}",
          "button.addEventListener('click', function() {})",
          "button.listen('click')"
        ],
        correct: 1
      }
    ]
  },

  python: {
    title: "Python Programming",
    content: `
Python Basics
Python is a popular programming language for beginners and professionals.

1. Variables and Types
name = "Alice"
age = 25
is_student = True

2. Control Structures
if age >= 18:
  print("Adult")
else:
  print("Minor")

3. Loops
for i in range(5):
  print(i)

4. Practice
Write a program that prints numbers 0 to 4 using a loop.
    `,
    quiz: [
      {
        q: "How do you write a comment in Python?",
        a: ["// comment", "# comment", ""],
        correct: 1
      },
      {
        q: "What will 'print(2 ** 3)' output?",
        a: ["6", "8", "9"],
        correct: 1
      },
      {
        q: "Which keyword starts a for loop?",
        a: ["for", "while", "loop"],
        correct: 0
      }
    ]
  },

  react: {
    title: "React.js Development",
    content: `
React.js Basics
React is a JavaScript library for building user interfaces.

1. Components
function Hello() {
  return <h1>Hello, React!</h1>;
}

2. JSX
JSX is a syntax that looks like HTML in JavaScript.

3. State
const [count, setCount] = React.useState(0);

4. Practice
Create a component that shows a button and a count that increases when clicked.
    `,
    quiz: [
      {
        q: "What is JSX?",
        a: ["A CSS framework", "JavaScript syntax extension", "A database"],
        correct: 1
      },
      {
        q: "How do you create a React component?",
        a: [
          "function MyComponent() {}",
          "const MyComponent = () => {}",
          "Both are correct"
        ],
        correct: 2
      },
      {
        q: "Which hook manages state in functional components?",
        a: ["useState", "useEffect", "useContext"],
        correct: 0
      }
    ]
  },

  nodejs: {
    title: "Node.js & Express",
    content: `
Node.js & Express
Node.js allows you to run JavaScript on the server side. Express is a framework for Node.js to build web servers.

1. Setting up a Server
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

2. Routing
Express lets you handle different URLs with routes.

3. Middleware
Functions that run between request and response.

4. Practice
Build a simple server that responds with 'Hello World' on the homepage.
    `,
    quiz: [
      {
        q: "Which framework is commonly used with Node.js for building web servers?",
        a: ["React", "Express", "Angular"],
        correct: 1
      },
      {
        q: "What method handles HTTP GET requests in Express?",
        a: ["app.post()", "app.get()", "app.put()"],
        correct: 1
      },
      {
        q: "What does middleware do in Express?",
        a: [
          "Handles errors only",
          "Processes requests between client and server",
          "Stores data in database"
        ],
        correct: 1
      }
    ]
  }
};

// Login logic
loginBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === USERNAME && password === PASSWORD) {
    loginError.textContent = '';
    loginPage.classList.add('hidden');
    dashboard.classList.remove('hidden');
    usernameInput.value = '';
    passwordInput.value = '';
  } else {
    loginError.textContent = 'Incorrect username or password.';
  }
});

// Logout logic
logoutBtn.addEventListener('click', () => {
  dashboard.classList.add('hidden');
  loginPage.classList.remove('hidden');
  courseModal.classList.add('hidden');
  quizSection.classList.add('hidden');
  quizBtn.classList.add('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';
});

// Start Course buttons event listeners
document.querySelectorAll('.start-course-btn').forEach(button => {
  button.addEventListener('click', () => {
    const courseKey = button.closest('.course').dataset.course;
    openCourseModal(courseKey);
  });
});

// Open Course Modal and load content
function openCourseModal(courseKey) {
  const course = courses[courseKey];
  if (!course) return;

  courseTitleEl.textContent = course.title;
  courseContentEl.textContent = course.content;
  quizSection.classList.add('hidden');
  quizBtn.classList.remove('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';
  courseModal.classList.remove('hidden');

  // Save current course key for quiz
  courseModal.dataset.currentCourse = courseKey;
}

// Close Modal
closeModalBtn.addEventListener('click', () => {
  courseModal.classList.add('hidden');
  quizSection.classList.add('hidden');
  quizBtn.classList.remove('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';
});

// Show Quiz
quizBtn.addEventListener('click', () => {
  const courseKey = courseModal.dataset.currentCourse;
  if (!courseKey) return;

  const course = courses[courseKey];
  if (!course || !course.quiz) return;

  quizForm.innerHTML = '';
  quizResult.textContent = '';
  quizSection.classList.remove('hidden');
  quizBtn.classList.add('hidden');

  course.quiz.forEach((qObj, i) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('quiz-question-block');

    const questionLabel = document.createElement('p');
    questionLabel.classList.add('quiz-question');
    questionLabel.textContent = `Q${i + 1}: ${qObj.q}`;
    questionDiv.appendChild(questionLabel);

    qObj.a.forEach((option, index) => {
      const optionLabel = document.createElement('label');
      optionLabel.classList.add('quiz-option');

      const optionInput = document.createElement('input');
      optionInput.type = 'radio';
      optionInput.name = `question${i}`;
      optionInput.value = index;

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      questionDiv.appendChild(optionLabel);
    });

    quizForm.appendChild(questionDiv);
  });
});

// Submit Quiz and check answers
submitQuizBtn.addEventListener('click', () => {
  const courseKey = courseModal.dataset.currentCourse;
  if (!courseKey) return;

  const course = courses[courseKey];
  if (!course || !course.quiz) return;

  const answers = [];
  const totalQuestions = course.quiz.length;

  for (let i = 0; i < totalQuestions; i++) {
    const selected = quizForm.querySelector(`input[name="question${i}"]:checked`);
    if (!selected) {
      quizResult.textContent = 'Please answer all questions before submitting.';
      return;
    }
    answers.push(parseInt(selected.value));
  }

  // Calculate score
  let score = 0;
  answers.forEach((ans, idx) => {
    if (ans === course.quiz[idx].correct) {
      score++;
    }
  });

  quizResult.textContent = `You scored ${score} out of ${totalQuestions}.`;
});

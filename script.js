// DOM Elements
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
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

// Hardcoded credentials for demo
const USERNAME = 'admin';
const PASSWORD = '1234';

// Course data with content & quiz
const courses = {
  'html-css': {
    title: 'HTML & CSS Fundamentals',
    content: `
      <h3>Introduction to HTML & CSS</h3>
      <p>Learn the building blocks of the web: HTML structures your content, CSS styles it.</p>
      <h4>Basic HTML Example:</h4>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <h4>Basic CSS Example:</h4>
      <pre><code>h1 {
  color: red;
  font-family: Arial, sans-serif;
  text-align: center;
}</code></pre>
      <p>Try modifying these examples to see how they affect the page!</p>
    `,
    quiz: [
      {
        q: 'What tag is used to create a paragraph in HTML?',
        a: ['&lt;div&gt;', '&lt;p&gt;', '&lt;section&gt;'],
        correct: 1
      },
      {
        q: 'Which CSS property changes the text color?',
        a: ['color', 'font-size', 'background'],
        correct: 0
      }
    ]
  },
  'javascript': {
    title: 'JavaScript Essentials',
    content: `
      <h3>Getting Started with JavaScript</h3>
      <p>JavaScript makes websites interactive and dynamic.</p>
      <h4>Basic JavaScript Example:</h4>
      <pre><code>function greet(name) {
  alert('Hello, ' + name + '!');
}
greet('World');</code></pre>
      <p>This code shows a popup greeting the user.</p>
    `,
    quiz: [
      {
        q: 'How do you declare a variable in JavaScript?',
        a: ['var myVar;', 'variable myVar;', 'let myVar;'],
        correct: 2
      },
      {
        q: 'What does the function "alert()" do?',
        a: ['Shows a popup message', 'Logs to console', 'Changes the background'],
        correct: 0
      }
    ]
  },
  'python': {
    title: 'Python Programming',
    content: `
      <h3>Python Basics</h3>
      <p>Python is known for readability and simplicity.</p>
      <h4>Simple Python Script:</h4>
      <pre><code>def greet(name):
    print(f"Hello, {name}!")

greet("World")</code></pre>
      <p>This prints a greeting in the console.</p>
    `,
    quiz: [
      {
        q: 'How do you print text in Python?',
        a: ['echo "text"', 'print("text")', 'console.log("text")'],
        correct: 1
      },
      {
        q: 'What symbol is used for comments in Python?',
        a: ['//', '#', '<!-- -->'],
        correct: 1
      }
    ]
  },
  'react': {
    title: 'React.js Development',
    content: `
      <h3>React Basics</h3>
      <p>React lets you build UI components efficiently.</p>
      <h4>Basic React Component:</h4>
      <pre><code>function Hello() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}</code></pre>
      <p>This renders a simple heading in a React app.</p>
    `,
    quiz: [
      {
        q: 'React components start with which letter case?',
        a: ['lowercase', 'Uppercase', 'camelCase'],
        correct: 1
      },
      {
        q: 'What hook is used to manage state in React?',
        a: ['useEffect', 'useState', 'useContext'],
        correct: 1
      }
    ]
  },
  'nodejs': {
    title: 'Node.js & Express',
    content: `
      <h3>Node.js Server Basics</h3>
      <p>Node.js lets you run JavaScript on the server.</p>
      <h4>Simple Express Server:</h4>
      <pre><code>const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) =&gt; {
  res.send('Hello World!');
});

app.listen(PORT, () =&gt; {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>
      <p>Try creating your own server to serve web pages or APIs.</p>
    `,
    quiz: [
      {
        q: 'Which module is commonly used for web servers in Node.js?',
        a: ['http', 'express', 'fs'],
        correct: 1
      },
      {
        q: 'What does middleware do in Express?',
        a: [
          'Handles errors only',
          'Processes requests between client and server',
          'Stores data in database'
        ],
        correct: 1
      }
    ]
  }
};

// Login Functionality
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

// Logout Functionality
logoutBtn.addEventListener('click', () => {
  dashboard.classList.add('hidden');
  loginPage.classList.remove('hidden');
  closeCourseModal();
});

// Start Course Button Click
document.querySelectorAll('.start-course-btn').forEach(button => {
  button.addEventListener('click', () => {
    const courseKey = button.closest('.course').dataset.course;
    openCourseModal(courseKey);
  });
});

// Open Course Modal and Load Content
function openCourseModal(courseKey) {
  const course = courses[courseKey];
  if (!course) return;

  courseTitleEl.textContent = course.title;
  courseContentEl.innerHTML = course.content;

  quizSection.classList.add('hidden');
  quizBtn.classList.remove('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';

  courseModal.dataset.currentCourse = courseKey;
  courseModal.classList.remove('hidden');
}

// Close Modal
closeModalBtn.addEventListener('click', closeCourseModal);

function closeCourseModal() {
  courseModal.classList.add('hidden');
  quizSection.classList.add('hidden');
  quizBtn.classList.remove('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';
}

// Show Quiz
quizBtn.addEventListener('click', () => {
  const courseKey = courseModal.dataset.currentCourse;
  if (!courseKey) return;

  const course = courses[courseKey];
  if (!course.quiz) return;

  quizBtn.classList.add('hidden');
  quizSection.classList.remove('hidden');
  quizResult.textContent = '';

  // Build quiz form dynamically
  quizForm.innerHTML = '';
  course.quiz.forEach((question, i) => {
    const questionDiv = document.createElement('div');

    const questionP = document.createElement('p');
    questionP.classList.add('quiz-question');
    questionP.textContent = `Q${i + 1}: ${question.q}`;
    questionDiv.appendChild(questionP);

    question.a.forEach((answer, idx) => {
      const label = document.createElement('label');
      label.classList.add('quiz-option');

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${i}`;
      input.value = idx;

      label.appendChild(input);
      label.appendChild(document.createTextNode(answer));
      questionDiv.appendChild(label);
    });

    quizForm.appendChild(questionDiv);
  });
});

// Submit Quiz
submitQuizBtn.addEventListener('click', () => {
  const courseKey = courseModal.dataset.currentCourse;
  if (!courseKey) return;

  const course = courses[courseKey];
  if (!course.quiz) return;

  let score = 0;
  const totalQuestions = course.quiz.length;

  for (let i = 0; i < totalQuestions; i++) {
    const selected = quizForm.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert(`Please answer question ${i + 1}`);
      return;
    }
    if (parseInt(selected.value) === course.quiz[i].correct) {
      score++;
    }
  }

  quizResult.textContent = `You scored ${score} out of ${totalQuestions}!`;
});

// script.js

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
<section>
  <h2>HTML Basics</h2>
  <p>HTML is the language used to structure webpages. It uses tags to organize content.</p>

  <article>
    <h3>1. HTML Document Structure</h3>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
    <p>This is a simple HTML page with a heading and a paragraph.</p>
  </article>

  <article>
    <h3>2. Common HTML Tags</h3>
    <ul>
      <li><code>&lt;h1&gt;...&lt;/h1&gt;</code> to <code>&lt;h6&gt;...&lt;/h6&gt;</code>: Headings</li>
      <li><code>&lt;p&gt;...&lt;/p&gt;</code>: Paragraphs</li>
      <li><code>&lt;a href="url"&gt;...&lt;/a&gt;</code>: Links</li>
      <li><code>&lt;img src="image.jpg" alt="description"&gt;</code>: Images</li>
      <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code>: Lists</li>
    </ul>
  </article>

  <article>
    <h3>3. Example: Creating a Link</h3>
    <p><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code></p>
  </article>

  <article>
    <h3>4. CSS Basics</h3>
    <p>CSS is used to style and layout webpages. It controls colors, fonts, spacing, and more.</p>
  </article>

  <article>
    <h3>5. CSS Syntax</h3>
    <pre><code>selector {
  property: value;
}
</code></pre>
    <p>Example: To make all paragraphs red:</p>
    <pre><code>p {
  color: red;
}
</code></pre>
  </article>

  <article>
    <h3>6. Common Properties</h3>
    <ul>
      <li><code>color</code>: Text color</li>
      <li><code>background-color</code>: Background color</li>
      <li><code>font-size</code>: Text size</li>
      <li><code>margin</code>: Space outside elements</li>
      <li><code>padding</code>: Space inside elements</li>
    </ul>
  </article>

  <article>
    <h3>7. Example: Styling a Button</h3>
    <pre><code>button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</code></pre>
  </article>

  <article>
    <h3>8. Practice</h3>
    <p>Create a simple webpage with headings, paragraphs, links, and style them with CSS!</p>
  </article>
</section>
`,
    quiz: [
      { 
        q: "What does HTML stand for?", 
        a: [ "HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language" ], 
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

  'javascript': {
    title: "JavaScript Essentials",
    content: `
<section>
  <h2>JavaScript Basics</h2>
  <p>JavaScript adds interactivity to webpages, letting you create dynamic content.</p>

  <article>
    <h3>1. Variables and Data Types</h3>
    <pre><code>let name = "Alice";    // String
let age = 25;          // Number
let isStudent = true;  // Boolean
</code></pre>
  </article>

  <article>
    <h3>2. Functions</h3>
    <pre><code>function greet() {
  alert("Hello, World!");
}
greet();
</code></pre>
  </article>

  <article>
    <h3>3. Events</h3>
    <p>JavaScript can respond to user actions like clicks.</p>
    <pre><code>button.addEventListener('click', () => {
  alert('Button clicked!');
});
</code></pre>
  </article>

  <article>
    <h3>4. Practice</h3>
    <p>Create a button that shows an alert when clicked.</p>
  </article>
</section>
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

  'python': {
    title: "Python Programming",
    content: `
<section>
  <h2>Python Basics</h2>
  <p>Python is a popular programming language for beginners and professionals.</p>

  <article>
    <h3>1. Variables and Types</h3>
    <pre><code>name = "Alice"
age = 25
is_student = True
</code></pre>
  </article>

  <article>
    <h3>2. Control Structures</h3>
    <pre><code>if age >= 18:
  print("Adult")
else:
  print("Minor")
</code></pre>
  </article>

  <article>
    <h3>3. Loops</h3>
    <pre><code>for i in range(5):
  print(i)
</code></pre>
  </article>

  <article>
    <h3>4. Practice</h3>
    <p>Write a program that prints numbers 0 to 4 using a loop.</p>
  </article>
</section>
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

  'react': {
    title: "React.js Development",
    content: `
<section>
  <h2>React.js Basics</h2>
  <p>React is a JavaScript library for building user interfaces.</p>

  <article>
    <h3>1. Components</h3>
    <pre><code>function Hello() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}
</code></pre>
  </article>

  <article>
    <h3>2. JSX</h3>
    <p>JSX is a syntax that looks like HTML in JavaScript.</p>
  </article>

  <article>
    <h3>3. State</h3>
    <pre><code>const [count, setCount] = React.useState(0);
</code></pre>
  </article>

  <article>
    <h3>4. Practice</h3>
    <p>Create a component that shows a button and a count that increases when clicked.</p>
  </article>
</section>
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

  'nodejs': {
    title: "Node.js & Express",
    content: `
<section>
  <h2>Node.js & Express</h2>
  <p>Node.js allows JavaScript to run on the server. Express is a framework for building web apps.</p>

  <article>
    <h3>1. Setting up Express</h3>
    <pre><code>const express = require('express');
const app = express();
app.listen(3000, () =&gt; console.log('Server started'));
</code></pre>
  </article>

  <article>
    <h3>2. Routes</h3>
    <pre><code>app.get('/', (req, res) =&gt; {
  res.send('Hello World');
});
</code></pre>
  </article>

  <article>
    <h3>3. Practice</h3>
    <p>Create a server that responds with "Hello World" on the home route.</p>
  </article>
</section>
`,
    quiz: [
      {
        q: "Which method defines a GET route in Express?",
        a: ["app.get()", "app.post()", "app.route()"],
        correct: 0
      },
      {
        q: "How do you start an Express server?",
        a: ["app.listen()", "server.start()", "app.run()"],
        correct: 0
      },
      {
        q: "Express is a framework for what?",
        a: ["Backend web apps", "Frontend design", "Database management"],
        correct: 0
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

// Start Course buttons
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
  courseContentEl.innerHTML = course.content;

  quizSection.classList.add('hidden');
  quizBtn.classList.remove('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';

  courseModal.classList.remove('hidden');
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
  if (!course.quiz) return;

  quizBtn.classList.add('hidden');
  quizSection.classList.remove('hidden');
  quizResult.textContent = '';

  // Build quiz form
  quizForm.innerHTML = '';

  course.quiz.forEach((item, index) => {
    const qDiv = document.createElement('div');

    const questionP = document.createElement('p');
    questionP.className = 'quiz-question';
    questionP.textContent = `Q${index + 1}: ${item.q}`;
    qDiv.appendChild(questionP);

    item.a.forEach((option, i) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + index;
      input.value = i;

      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      qDiv.appendChild(label);
    });

    quizForm.appendChild(qDiv);
  });
});

// Submit Quiz
submitQuizBtn.addEventListener('click', () => {
  const courseKey = courseModal.dataset.currentCourse;
  if (!courseKey) return;

  const course = courses[courseKey];
  if (!course.quiz) return;

  let score = 0;
  const total = course.quiz.length;

  for (let i = 0; i < total; i++) {
    const selected = quizForm.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert(`Please answer question ${i + 1}`);
      return;
    }

    if (parseInt(selected.value) === course.quiz[i].correct) {
      score++;
    }
  }

  quizResult.textContent = `You scored ${score} out of ${total}!`;
});

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
      <h2>HTML Basics</h2>
      <p>HTML is the language used to structure webpages. It uses tags to organize content.</p>
      
      <h3>1. HTML Document Structure</h3>
      <pre><code>
&lt;!DOCTYPE html&gt;
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
      
      <h3>2. Common HTML Tags</h3>
      <ul>
        <li><code>&lt;h1&gt;...&lt;/h1&gt;</code> to <code>&lt;h6&gt;...&lt;/h6&gt;</code>: Headings</li>
        <li><code>&lt;p&gt;...&lt;/p&gt;</code>: Paragraphs</li>
        <li><code>&lt;a href="url"&gt;...&lt;/a&gt;</code>: Links</li>
        <li><code>&lt;img src="image.jpg" alt="description"&gt;</code>: Images</li>
        <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code>: Lists</li>
      </ul>
      
      <h3>3. Example: Creating a Link</h3>
      <p><code>&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;</code></p>
      
      <h3>4. CSS Basics</h3>
      <p>CSS is used to style and layout webpages. It controls colors, fonts, spacing, and more.</p>
      
      <h3>5. CSS Syntax</h3>
      <pre><code>
selector {
  property: value;
}
      </code></pre>
      <p>Example: To make all paragraphs red:</p>
      <pre><code>
p {
  color: red;
}
      </code></pre>
      
      <h3>6. Common Properties</h3>
      <ul>
        <li><code>color</code>: Text color</li>
        <li><code>background-color</code>: Background color</li>
        <li><code>font-size</code>: Text size</li>
        <li><code>margin</code>: Space outside elements</li>
        <li><code>padding</code>: Space inside elements</li>
      </ul>
      
      <h3>7. Example: Styling a Button</h3>
      <pre><code>
button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
      </code></pre>
      
      <h3>8. Practice</h3>
      <p>Create a simple webpage with headings, paragraphs, links, and style them with CSS!</p>
    `,
    quiz: [
      {
        q: "What does HTML stand for?",
        a: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
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
      <h2>JavaScript Basics</h2>
      <p>JavaScript adds interactivity to webpages, letting you create dynamic content.</p>
      
      <h3>1. Variables and Data Types</h3>
      <pre><code>
let name = "Alice";    // String
let age = 25;          // Number
let isStudent = true;  // Boolean
      </code></pre>
      
      <h3>2. Functions</h3>
      <pre><code>
function greet() {
  alert("Hello, World!");
}
greet();
      </code></pre>
      
      <h3>3. Events</h3>
      <p>JavaScript can respond to user actions like clicks.</p>
      <pre><code>
button.addEventListener('click', () => {
  alert('Button clicked!');
});
      </code></pre>
      
      <h3>4. Practice</h3>
      <p>Create a button that shows an alert when clicked.</p>
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
      <h2>Python Basics</h2>
      <p>Python is a popular programming language for beginners and professionals.</p>
      
      <h3>1. Variables and Types</h3>
      <pre><code>
name = "Alice"
age = 25
is_student = True
      </code></pre>
      
      <h3>2. Control Structures</h3>
      <pre><code>
if age >= 18:
  print("Adult")
else:
  print("Minor")
      </code></pre>
      
      <h3>3. Loops</h3>
      <pre><code>
for i in range(5):
  print(i)
      </code></pre>
      
      <h3>4. Practice</h3>
      <p>Write a program that prints numbers 0 to 4 using a loop.</p>
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
      <h2>React.js Basics</h2>
      <p>React is a JavaScript library for building user interfaces.</p>
      
      <h3>1. Components</h3>
      <pre><code>
function Hello() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}
      </code></pre>
      
      <h3>2. JSX</h3>
      <p>JSX is a syntax that looks like HTML in JavaScript.</p>
      
      <h3>3. State</h3>
      <pre><code>
const [count, setCount] = React.useState(0);
      </code></pre>
      
      <h3>4. Practice</h3>
      <p>Create a component that shows a button and a count that increases when clicked.</p>
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
      <h2>Node.js & Express</h2>
      <p>Node.js allows you to run JavaScript on the server side. Express is a framework for Node.js to build web servers.</p>
      
      <h3>1. Setting up a Server</h3>
      <pre><code>
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
      </code></pre>
      
      <h3>2. Routing</h3>
      <p>Express lets you handle different URLs with routes.</p>
      
      <h3>3. Middleware</h3>
      <p>Functions that run between request and response.</p>
      
      <h3>4. Practice</h3>
      <p>Build a simple server that responds with 'Hello World' on the homepage.</p>
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

// Login button, logout, modal, quiz logic remains the same
// But make sure when loading course content you do:
function openCourseModal(courseKey) {
  const course = courses[courseKey];
  if (!course) return;
  courseTitleEl.textContent = course.title;
  courseContentEl.innerHTML = course.content; // <-- innerHTML to render HTML
  quizSection.classList.add('hidden');
  quizBtn.classList.remove('hidden');
  quizResult.textContent = '';
  quizForm.innerHTML = '';
  courseModal.classList.remove('hidden');
  courseModal.dataset.currentCourse = courseKey;
}

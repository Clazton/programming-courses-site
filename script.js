// Data for courses - short description & detailed content + quiz
const courses = {
  'html-css': {
    title: "HTML & CSS Fundamentals",
    shortDesc: "Learn to build and style webpages with HTML and CSS, the foundation of the web.",
    content: `
      <h3>HTML Basics</h3>
      <p>HTML structures your content with elements and tags.</p>
      <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Sample Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
      <h3>CSS Basics</h3>
      <p>CSS styles your webpage by setting colors, layout, and fonts.</p>
      <pre>p {
  color: blue;
  font-size: 16px;
}</pre>
      <h3>Try it Yourself</h3>
      <p>Create a webpage with headings and paragraphs styled in your favorite colors!</p>
    `,
    quiz: [
      { q: "What does HTML stand for?", a: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correct: 0 },
      { q: "Which tag creates a hyperlink?", a: ["<a>", "<link>", "<href>"], correct: 0 },
      { q: "Which CSS property changes text color?", a: ["font-style", "color", "text-decoration"], correct: 1 }
    ]
  },
  'javascript': {
    title: "JavaScript Essentials",
    shortDesc: "Make your webpages interactive using JavaScript programming.",
    content: `
      <h3>Variables & Data Types</h3>
      <pre>let name = "Alice";  // String
let age = 25;          // Number
let isStudent = true;  // Boolean</pre>
      <h3>Functions & Events</h3>
      <pre>function greet() {
  alert("Hello!");
}
button.addEventListener('click', greet);</pre>
      <h3>Try it Yourself</h3>
      <p>Create a button that shows an alert when clicked.</p>
    `,
    quiz: [
      { q: "Which keyword declares a variable with block scope?", a: ["var", "let", "const"], correct: 1 },
      { q: "What does alert() do?", a: ["Shows a popup", "Logs to console", "Changes content"], correct: 0 },
      { q: "How to add click event listener?", a: ["button.onClick = func", "button.addEventListener('click', func)", "button.listen('click')"], correct: 1 }
    ]
  },
  'python': {
    title: "Python Programming",
    shortDesc: "Begin your programming journey with Python's simple and readable syntax.",
    content: `
      <h3>Variables & Types</h3>
      <pre>name = "Alice"
age = 25
is_student = True</pre>
      <h3>Control Flow</h3>
      <pre>if age &gt;= 18:
  print("Adult")
else:
  print("Minor")</pre>
      <h3>Try it Yourself</h3>
      <p>Write a program printing numbers from 0 to 4 using a loop.</p>
    `,
    quiz: [
      { q: "How do you write a comment in Python?", a: ["// comment", "# comment", "<!-- comment -->"], correct: 1 },
      { q: "What does print(2 ** 3) output?", a: ["6", "8", "9"], correct: 1 },
      { q: "Which keyword starts a for loop?", a: ["for", "while", "loop"], correct: 0 }
    ]
  },
  'react': {
    title: "React.js Development",
    shortDesc: "Build fast, interactive user interfaces using React.js.",
    content: `
      <h3>React Components</h3>
      <pre>function Hello() {
  return &lt;h1&gt;Hello, React!&lt;/h1&gt;;
}</pre>
      <h3>JSX Syntax</h3>
      <p>JSX looks like HTML but works inside JavaScript.</p>
      <h3>Try it Yourself</h3>
      <p>Create a button that increments a number when clicked.</p>
    `,
    quiz: [
      { q: "What is JSX?", a: ["CSS Framework", "JS syntax extension", "Database"], correct: 1 },
      { q: "How to create React component?", a: ["function MyComp() {}", "const MyComp = () => {}", "Both"], correct: 2 },
      { q: "Which hook manages state?", a: ["useState", "useEffect", "useContext"], correct: 0 }
    ]
  },
  'nodejs': {
    title: "Node.js & Express",
    shortDesc: "Build backend servers and APIs using Node.js and Express.",
    content: `
      <h3>Express Setup</h3>
      <pre>const express = require('express');
const app = express();
app.listen(3000, () =&gt; console.log('Server started'));</pre>
      <h3>Routing</h3>
      <pre>app.get('/', (req, res) =&gt; {
  res.send('Hello World');
});</pre>
      <h3>Try it Yourself</h3>
      <p>Create a server that responds with "Hello World" on home route.</p>
    `,
    quiz: [
      { q: "Which method starts the server?", a: ["app.run()", "app.listen()", "app.start()"], correct: 1 },
      { q: "How to respond with text?", a: ["res.send()", "res.write()", "res.end()"], correct: 0 },
      { q: "Which package is Express?", a: ["npm install express", "npm install react", "npm install node"], correct: 0 }
    ]
  }
};

const coursesGrid = document.getElementById('coursesGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const quizSection = document.getElementById('quizSection');
const quizForm = document.getElementById('quizForm');
const submitQuizBtn = document.getElementById('submitQuizBtn');
const quizResult = document.getElementById('quizResult');
const closeModalBtn = document.getElementById('closeModalBtn');

// Build the course cards
function buildCourses() {
  for (const key in courses) {
    const course = courses[key];
    const card = document.createElement('article');
    card.className = 'course-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Open details for ${course.title}`);

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.shortDesc}</p>
      <button type="button" aria-haspopup="dialog" aria-controls="modalOverlay">Learn More</button>
    `;

    // Clicking card or button opens modal
    card.addEventListener('click', () => openModal(key));
    card.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(key);
    });

    // Keyboard support
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(key);
      }
    });

    coursesGrid.appendChild(card);
  }
}

// Open modal with course details and quiz
function openModal(courseKey) {
  const course = courses[courseKey];
  if (!course) return;

  modalTitle.textContent = course.title;
  modalContent.innerHTML = course.content;

  // Build quiz
  quizForm.innerHTML = '';
  submitQuizBtn.disabled = false;
  quizResult.textContent = '';
  course.quiz.forEach((qItem, i) => {
    const qWrapper = document.createElement('fieldset');
    qWrapper.className = 'quiz-question-wrapper';

    const legend = document.createElement('legend');
    legend.className = 'quiz-question';
    legend.textContent = `${i + 1}. ${qItem.q}`;
    qWrapper.appendChild(legend);

    qItem.a.forEach((opt, idx) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${i}`;
      input.value = idx;
      input.required = true;

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      qWrapper.appendChild(label);
    });

    quizForm.appendChild(qWrapper);
  });

  quizSection.hidden = false;
  modalOverlay.classList.add('active');
  closeModalBtn.focus();
}

// Close modal
function closeModal() {
  modalOverlay.classList.remove('active');
  quizResult.textContent = '';
  quizForm.innerHTML = '';
  modalContent.innerHTML = '';
}

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Quiz submission handling
submitQuizBtn.addEventListener('click', () => {
  const courseTitle = modalTitle.textContent;
  const course = Object.values(courses).find(c => c.title === courseTitle);
  if (!course) return;

  let score = 0;
  const total = course.quiz.length;

  for (let i = 0; i < total; i++) {
    const selected = quizForm.querySelector(`input[name="q${i}"]:checked`);
    if (!selected) {
      alert(`Please answer question ${i + 1}`);
      return;
    }
    if (parseInt(selected.value, 10) === course.quiz[i].correct) {
      score++;
    }
  }

  quizResult.textContent = `You scored ${score} out of ${total}!`;
  submitQuizBtn.disabled = true;
});

// Initialize
buildCourses();

const courses = [
  {
    id: 'course1',
    title: 'Python Basics',
    description: 'Learn Python syntax, variables, data types, and functions.',
    page: 'course1.html',
  },
  {
    id: 'course2',
    title: 'JavaScript Essentials',
    description: 'Understand JS fundamentals and interactive web programming.',
    page: 'course2.html',
  },
  {
    id: 'course3',
    title: 'HTML & CSS',
    description: 'Build beautiful web pages with markup and styles.',
    page: 'course3.html',
  },
  {
    id: 'course4',
    title: 'Java Fundamentals',
    description: 'Get started with Java programming basics.',
    page: 'course4.html',
  },
  {
    id: 'course5',
    title: 'C++ Introduction',
    description: 'Learn C++ syntax and basic programming concepts.',
    page: 'course5.html',
  },
];

function loadDashboard() {
  const username = localStorage.getItem('loggedInUser');
  if (!username) {
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('usernameDisplay').textContent = username;

  const container = document.getElementById('coursesContainer');
  container.innerHTML = '';

  courses.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <button onclick="location.href='${course.page}'">Start Course</button>
    `;
    container.appendChild(card);
  });
}

window.onload = loadDashboard;

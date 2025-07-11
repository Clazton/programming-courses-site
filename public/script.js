function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  } else {
    alert('Invalid credentials. Try username: admin and password: 1234');
  }
}

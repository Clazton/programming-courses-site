async function loginUser() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (!username || !password) {
    errorMsg.textContent = 'Please enter username and password.';
    return;
  }

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
      } else {
        errorMsg.textContent = data.message || 'Login failed';
      }
    } else if (response.status === 401) {
      errorMsg.textContent = 'Invalid username or password.';
    } else {
      errorMsg.textContent = 'Server error, please try again later.';
    }
  } catch (err) {
    errorMsg.textContent = 'Network error, please check your connection.';
    console.error(err);
  }
}

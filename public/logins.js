async function loginUser() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  if (!username || !password) {
    errorMsg.textContent = "Please enter both username and password.";
    return;
  }

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'dashboard.html';
      } else {
        errorMsg.textContent = data.message || 'Login failed';
      }
    } else if (res.status === 401) {
      errorMsg.textContent = 'Invalid username or password.';
    } else {
      errorMsg.textContent = 'Login failed, please try again later.';
    }
  } catch (error) {
    errorMsg.textContent = 'Network error. Please check your connection.';
    console.error(error);
  }
}

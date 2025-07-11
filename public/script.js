// script.js
async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: user, password: pass })
    });

    if (res.ok) {
      window.location.href = "dashboard.html";
    } else {
      const result = await res.json();
      errorMsg.textContent = result.message;
    }
  } catch (err) {
    errorMsg.textContent = "Server error. Try again.";
  }
}

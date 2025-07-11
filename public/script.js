function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (!user || !pass) {
    errorMsg.textContent = "Please enter username and password.";
    return;
  }

  fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: user, password: pass }),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Login failed");
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        localStorage.setItem("loggedInUser", user);
        window.location.href = "dashboard.html";
      } else {
        errorMsg.textContent = data.message || "Login failed";
      }
    })
    .catch(() => {
      errorMsg.textContent = "Invalid username or password.";
    });
}

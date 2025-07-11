const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "student1", password: "stud123", role: "student" },
  { username: "student2", password: "learn456", role: "student" },
];

function login() {
  const userInput = document.getElementById("username").value;
  const passInput = document.getElementById("password").value;

  const foundUser = users.find(
    (user) => user.username === userInput && user.password === passInput
  );

  if (foundUser) {
    document.getElementById("loginScreen").classList.add("hidden");

    if (foundUser.role === "admin") {
      const adminDash = document.getElementById("adminDashboard");
      adminDash.classList.remove("hidden");
      adminDash.style.display = "flex";
    } else {
      const studentDash = document.getElementById("studentDashboard");
      studentDash.classList.remove("hidden");
      studentDash.style.display = "flex";
    }
  } else {
    alert("Invalid username or password.");
  }
}

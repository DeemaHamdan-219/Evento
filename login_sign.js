// Get elements
const card = document.querySelector(".card");
const showSignUp = document.getElementById("showSignUp");
const showLogin = document.getElementById("showLogin");

// Flip to Sign-Up Form
showSignUp.addEventListener("click", () => {
    card.classList.add("flip");
});

// Flip back to Login Form
showLogin.addEventListener("click", () => {
    card.classList.remove("flip");
});

// Save user data
let users = {};

// Sign-Up validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (name && email && password) {
        users[email] = password; // Store user in memory
        alert("Account created successfully! ✅ Now login.");
        card.classList.remove("flip"); // Flip back to login
    } else {
        alert("Please fill all fields! ❌");
    }
});

// Login validation
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (users[email] && users[email] === password) {
        alert("Login successful! 🎉");
    } else {
        alert("Invalid email or password. ❌");
    }
});

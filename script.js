// Simulated user database using localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to save users to localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Function to handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Find user in database
    const loggedInUser = users.find(user => user.username === loginUsername && user.password === loginPassword);
    if (loggedInUser) {
        // Simulated login success
        document.getElementById('loginMessage').textContent = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'zelan.html'; // Redirect to home page after 1 second
        }, 1000);
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }
});

// Function to update user information
function updateUser(username, newEmail, newPassword) {
    const currentUser = users.find(user => user.username === username);
    if (currentUser) {
        // Update user's email and/or password
        if (newEmail) {
            currentUser.email = newEmail;
        }
        if (newPassword) {
            currentUser.password = newPassword;
        }
        saveUsers();
        return true; // Return true if update successful
    }
    return false; // Return false if user not found
}

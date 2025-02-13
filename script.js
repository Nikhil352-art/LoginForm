document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert(`Welcome, ${username}!`);
    } else {
        alert('Please fill in both fields.');
    }
});

document.querySelector('.signup-btn').addEventListener('click', function() {
    alert('Redirecting to Sign Up page...');
});

document.getElementById('forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Password recovery link will be sent to your email.');
});


document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if(username && password) {
            // Simulate a successful login
            alert('Login form submitted!');
            console.log(`Username: ${username}, Password: ${password}`);
        } else {
            alert('Please fill out all fields.');
        }
    });

    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const feedbackText = document.getElementById('feedbackText').value;

        if(feedbackText) {
            // Simulate successful feedback submission
            alert('Feedback form submitted!');
            console.log(`Feedback: ${feedbackText}`);
        } else {
            alert('Please provide your feedback.');
        }
    });
});
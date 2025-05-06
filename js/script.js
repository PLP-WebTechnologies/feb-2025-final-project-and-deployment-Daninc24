function validateForm() {
    // Clear previous error message
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.style.display = 'none';
    errorMessageDiv.innerHTML = '';

    // Get the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation checks
    if (!name || !email || !message) {
        errorMessageDiv.style.display = 'block';
        errorMessageDiv.innerHTML = 'All fields are required!';
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessageDiv.style.display = 'block';
        errorMessageDiv.innerHTML = 'Please enter a valid email address!';
        return false;
    }

    // If everything is valid, return true to submit the form
    return true;
}

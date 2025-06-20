 // Function to validate the form
 function validateForm() {
    // Get form values
    var name = document.forms["signupForm"]["name"].value;
    var email = document.forms["signupForm"]["email"].value;
    var password = document.forms["signupForm"]["password"].value;
    var termsAccepted = document.forms["signupForm"]["terms"].checked;

    // Check if the name field is empty
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Check if the email field is empty or invalid
    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    }

    // Check if the password field is empty or too short
    if (password === "") {
        alert("Password must be filled out");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Check if terms and conditions are accepted
    if (!termsAccepted) {
        alert("You must accept the terms and conditions");
        return false;
    }

    // If everything is okay
    alert("Form submitted successfully!");
    return true;
}

// Helper function to validate email format using regex
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

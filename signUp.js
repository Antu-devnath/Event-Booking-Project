function validationName() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const words = firstName.split(/\s+/);
    const wordsl = firstName.split(/\s+/);

    if (firstName === "" && lastName === "") {
        alert("Please enter both first and last name.");
        return false;
    }

    return true;
}
function validationEmail() {
    const email = document.getElementById('email').value.trim();
    const mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!mailFormat.test(email)) {
        alert("Invalid email. Please enter a valid email address.");
        return false;
    }
    return true;
}
function ValidationPassword ()  {
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("passwordError");
 
    if (password.length < 6) {
        errorDiv.textContent = "Password must be at least 6 characters.";
        return false;
    }
 
    errorDiv.textContent = "";
    return true;
};
function ValidationconfirmPasswor(){
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorDiv = document.getElementById("confirmPasswordError");
 
    if (confirmPassword !== password) {
        errorDiv.textContent = "Passwords do not match.";
        return false;
    }
 
    errorDiv.textContent = "";
    return true;
};
function validationVerification() {
    return validationName() &&
           validationEmail() &&
           ValidationPassword() &&
           ValidationconfirmPassword()
           
};
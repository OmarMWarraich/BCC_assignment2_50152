var password = prompt("Save your password");

var newPassword = prompt("Enter your new password");

if (newPassword === null) {
    alert("Please enter your password");
}
else if (newPassword === password) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password")
}
document.addEventListener("DOMContentLoaded", function() {
    document.forms["contact-form"].addEventListener("submit", postData);
});

function postData(formsubmission) {
    formsubmission.preventDefault();

    var name = encodeURIComponent(document.getElementById("name").value);
    var email = encodeURIComponent(document.querySelector("input[type='email']").value);
    var message = encodeURIComponent(document.getElementById("message").value);

    // Checks if fields are filled-in or not, returns response "<p>Please enter your details.</p>" if not.
    if (name == "" || email == "" || message == "") {
        document.getElementById("response").innerHTML = "<p>Please enter your details.</p>";
        return;
    }

    // Parameters to send to PHP script. The bits in the "quotes" are the POST indexes to be sent to the PHP script.
    var params = "name=" + name + "&email=" + email + "&message=" + message;

    var http = new XMLHttpRequest();
    http.open("POST", "https://eemailee.herokuapp.com/", true);

    // Set headers
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
            if (http.responseText) {
                document.getElementById("response").innerHTML = "<label class='ok'>Message Sent<i class='fa-solid fa-circle-check'></i></label>";
            } else {
                document.getElementById("response").innerHTML = "<label class='error' >An unknown error occurred while sending the email message<i class='fa-solid fa-circle-exclamation'></i></label>";
            }
        }
    }
    http.send(params);
    document.getElementById("response").innerHTML = "<img src='images/Rolling.svg'>";

}
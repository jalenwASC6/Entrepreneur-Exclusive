const businessButton = document.getElementById("businessRegister");

businessButton.addEventListener("click", displayBusinessFields);

function displayBusinessFields(event) {
    event.preventDefault();
    document.getElementsByClassName("inputContainer")[0].style.display = "block";
    document.getElementById("businessRegister").style.display = "none";
}

function reset(event) {
    event.preventDefault();
    document.getElementById("businessRegister");
}
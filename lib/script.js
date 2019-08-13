const database = firebase.database().ref();
var businessButton = document.getElementById("businessRegister");
var back = document.getElementById("resetButton");
var submit = document.getElementById("submitButton");
var userButton = document.getElementById("userSearch");
var userBack = document.getElementById("userResetButton");
var userSubmit = document.getElementById("userSubmitButton");
const businessOwnerElement = document.getElementById("businessInfo-owner");
const businessNameElement = document.getElementById("businessInfo-name");
const businessTypeElement = document.getElementById("businessInfo-type");
const businessAddressElement = document.getElementById("businessInfo-address");
const businessNumberElement = document.getElementById("businessInfo-number");
const businessEmailElement = document.getElementById("businessInfo-email");


submit.addEventListener("click", updateDB);
back.addEventListener("click", startOver);
businessButton.addEventListener("click", displayBusinessFields);
//userSubmit.addEventListener("click", )
userBack.addEventListener("click", startOver2);
userButton.addEventListener("click", displaySearchBar);


function displayBusinessFields(event) {
    event.preventDefault();
    document.getElementsByClassName("inputContainer")[0].style.display = "block";
    document.getElementById("businessRegister").style.display = "none";
    document.getElementById("userSearch").style.display = "none";
}

function startOver(event) {
    event.preventDefault();
    document.getElementById("businessRegister").style.display = "block";
    document.getElementsByClassName("inputContainer")[0].style.display = "none";
    document.getElementById("userSearch").style.display = "block";
}

function updateDB(event) {
    event.preventDefault();
    const businessOwner = businessOwnerElement.value;
    const businessName = businessNameElement.value;
    const businessAddress = businessAddressElement.value;
    const businessType = businessTypeElement.value;
    const businessNumber = businessNumberElement.value;
    const businessEmail = businessEmailElement.value;

    businessOwnerElement.value = "";
    businessNameElement.value = "";
    businessAddressElement.value = "";
    businessTypeElement.value = "";
    businessNumberElement.value = "";
    businessEmailElement.value = "";

    const value = {
        OWNER: businessOwner,
        NAME: businessName,
        ADDRESS: businessAddress,
        TYPE: businessType,
        NUMBER: businessNumber,
        EMAIL: businessEmail
    }
    database.push(value);
}

function displaySearchBar(event) {
    event.preventDefault();
    document.getElementsByClassName("searchInfo")[0].style.display = "block";
    document.getElementById("userSearch").style.display = "none";
    document.getElementById("businessRegister").style.display = "none";
}

function startOver2(event) {
    event.preventDefault();
    document.getElementById("userSearch").style.display = "block";
    document.getElementsByClassName("searchInfo")[0].style.display = "none";
    document.getElementById("businessRegister").style.display = "block";

}
const database = firebase.database().ref();
const businessButton = document.getElementById("businessRegister");
const back = document.getElementById("resetButton");
const submit = document.getElementById("submitButton");
const businessOwnerElement = document.getElementById("businessInfo-owner");
const businessNameElement = document.getElementById("businessInfo-name");
const businessTypeElement = document.getElementById("businessInfo-type");
const businessAddressElement = document.getElementById("businessInfo-address");
const businessNumberElement = document.getElementById("businessInfo-number");
const businessEmailElement = document.getElementById("businessInfo-email");


submit.addEventListener("click", updateDB);
back.addEventListener("click", startOver);
businessButton.addEventListener("click", displayBusinessFields);


function displayBusinessFields(event) {
    event.preventDefault();
    document.getElementsByClassName("inputContainer")[0].style.display = "block";
    document.getElementById("businessRegister").style.display = "none";
}

function startOver(event) {
    event.preventDefault();
    document.getElementById("businessRegister").style.display = "block";
    document.getElementsByClassName("inputContainer")[0].style.display = "none";
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
// Jalen's Code //
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
userSubmit.addEventListener("click",findBusinessOfType)
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
    document.getElementById("businessesContainer").style.display = "none";
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
    document.getElementById("businessRegister").style.display = "block";
    document.getElementsByClassName("inputContainer")[0].style.display = "none";
    document.getElementById("userSearch").style.display = "block";
    document.getElementById("businessesContainer").style.display = "none";
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
    document.getElementById("businessesContainer").style.display = "none";
}

function findBusinessOfType(event){
    document.getElementById("businessesContainer").style.display = "block";
    document.getElementById("businessesContainer").innerHTML = ""
    event.preventDefault()
    database.on('value', function(result){
        var businesses = result.val();
        var searchTerm = document.getElementById("serviceSearch");
        for(var i in businesses){
            console.log(businesses[i])
            if (searchTerm.value == businesses[i].TYPE) {
                addBusinessDiv(businesses[i]);
            }
        }
    })
}

function addBusinessDiv(business){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "addedBusinesses")
    
    var ownerh2 = document.createElement("h2");
    ownerh2.innerHTML = `Owner's Name: ${business.OWNER}`
    newDiv.appendChild(ownerh2)

    var nameh2 = document.createElement("h2");
    nameh2.innerHTML = `Business Name: ${business.NAME}`
    newDiv.appendChild(nameh2)

    var addressh2 = document.createElement("h2");
    addressh2.innerHTML = `Business Address: ${business.ADDRESS}`
    newDiv.appendChild(addressh2)

    var typeh2 = document.createElement("h2");
    typeh2.innerHTML = `Business Type: ${business.TYPE}`
    newDiv.appendChild(typeh2)

    var numberh2 = document.createElement("h2");
    numberh2.innerHTML = `Business Number: ${business.NUMBER}`
    newDiv.appendChild(numberh2)

    var emailh2 = document.createElement("h2");
    emailh2.innerHTML = `Business E-Mail: ${business.EMAIL}`
    newDiv.appendChild(emailh2)

    document.getElementById("businessesContainer").appendChild(newDiv)
}
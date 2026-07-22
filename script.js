/**************************************
Pie Shop
 *************************************/

/**************************************
Variables
 *************************************/

// Defines input fields
const ItemsOutput = document.getElementById("ItemsOutput");
const ReceiptOutput = document.getElementById("ReceiptOutput");
const NAME_FIELD = document.getElementById("nameField");
const MONEY_FIELD = document.getElementById("moneyField");

// Array for pie menu
var pies = ["Mince and Cheese", "Steak and Cheese", "Butter Chicken", "Apple"];

// User variables stored in object
let orderInfo = {
    userName: "",
    userMoney: 0
};
// Variables
var change;
var moneyField = document.getElementById("moneyField");
var totalPrice = 0;


/**************************************
Main Code
 *************************************/

/**************************************
Functions
 *************************************/

//Function to add pie to order
function addPie(_type, _price){
    ItemsOutput.innerHTML += "<p>" + pies[_type] + ": $" + _price.toFixed(2) + "</p>";
    totalPrice = totalPrice + _price;
}

// Gets input from forms
function getFormInput(){
    // Puts form value into variables
    orderInfo = { 
        userName: nameField.value, 
        userMoney: Number(moneyField.value), 
    }; 
    start()
}

function start(){
    // Makes sure user name is valid
    if (typeof orderInfo.userName != 'string' || orderInfo.userName == "" || orderInfo.userName.length < 3){
        alert("Please enter a valid name")
        return
    }

    // Checks if the user has added an item to their order
    if (totalPrice == 0){
        alert("Your order is empty; please add an item")
        return
    }

    // Checks if the user entered a letter or word in the money field
    if (Number.isNaN(orderInfo.userMoney)){
        alert("Please enter a number as your price")
        return
    }
    
    // Checks if the user has enough money
    if (orderInfo.userMoney <= 0 || orderInfo.userMoney < totalPrice){
        alert("You do not have enough money")
        return;
    }

    // Checks if user put a number in their name
    if (/\d/.test(orderInfo.userName)) {
        alert("Name can not contain numbers");
        return
    } else if (orderInfo.userName.length < 3 || orderInfo.userName.length > 15){
        
    }

    // When the user presses submit it will clear what info was already there to avoid stacking
    ReceiptOutput.innerHTML = "";
    // Calculates change
    change = orderInfo.userMoney - totalPrice;
    // Reciept output
    ReceiptOutput.innerHTML += "<h3>Receipt:</h3>";
    ReceiptOutput.innerHTML += "<p>Name: " + orderInfo.userName + "<br>Money: $" + orderInfo.userMoney.toFixed(2) + "</p>"; 
    ReceiptOutput.innerHTML += "<p>Total Order Cost: $" + totalPrice.toFixed(2) + "</p>";
    ReceiptOutput.innerHTML += "<p>Change: $" + change;
}

// Function for the auto price button
function autoPrice(){
    moneyField.value = totalPrice.toFixed(2);
}

// Clears order by resetting variables and text fields
function clearOrder(){
    ReceiptOutput.innerHTML = "";
    ItemsOutput.innerHTML = "";
    moneyField.value = "";
    nameField.value = "";
    orderInfo.userMoney = 0;
    orderInfo.userName = "";
    totalPrice = 0;
}
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
// Array to keep track of pie quantities [Mince, Steak, Butter Chicken, Apple]
var piesOrdered = [0, 0, 0, 0];
// Array for pie prices
var prices = [6.50, 6.50, 7.00, 7.00];

// User variables stored in object
var orderInfo = {
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
    piesOrdered[_type]++;
    totalPrice = totalPrice + _price;

    // Clears the list display so items don't double up
    ItemsOutput.innerHTML = "";

    for (var i = 0; i < pies.length; i++) {
        if (piesOrdered[i] > 0) {
            var itemTotal = piesOrdered[i] * prices[i];
            ItemsOutput.innerHTML += "<p>" + piesOrdered[i] + "x " + pies[i] + " - $" + itemTotal.toFixed(2) + "</p>";
        }
    }
}


// Gets input from forms for ordering system
function getFormInput(){
    // Puts form value into variables
    orderInfo = { 
        userName: nameField.value, 
        userMoney: Number(moneyField.value), 
    }; 
    start()
}

function start(){
    // Makes sure user name is valid by making sure it has at least 3 characters, is not empty, and is a string and stops the progam if it isn't valid
    if (typeof orderInfo.userName != 'string' || orderInfo.userName == "" || orderInfo.userName.length < 2 || orderInfo.userName.length > 15){
        alert("Please enter a valid name")
        return
    }

    // Checks if the user has added an item to their order by seeing if the total price of their order is $0
    if (totalPrice == 0){
        alert("Your order is empty; please add an item")
        return
    }

    // Checks if the user entered a letter or word in the money field and stops the progam if they have
    if (Number.isNaN(orderInfo.userMoney)){
        alert("Please enter a number as your price")
        return
    }
    
    // Checks if the user has enough money and stops the progam if they don't by checking that the money the user inputs is more than the total price of their order
    if (orderInfo.userMoney <= 0 || orderInfo.userMoney < totalPrice){
        alert("You do not have enough money")
        return;
    }

    // Checks if user put a number in their name and stops the progam if they have
    if (/\d/.test(orderInfo.userName)) {
        alert("Name can not contain numbers");
        return
    }

    // When the user presses submit it will clear what info was already there to avoid stacking
    ReceiptOutput.innerHTML = "";
    // Calculates change by subtracting the total price from the money value the user inputs 
    change = orderInfo.userMoney - totalPrice;
    // Reciept output
    ReceiptOutput.innerHTML += "<hr><h3>Receipt:</h3>";
    ReceiptOutput.innerHTML += "<p><b>Name: </b>" + orderInfo.userName + "</p>";
    ReceiptOutput.innerHTML += "<p><b>Money:</b> $" + orderInfo.userMoney.toFixed(2) + "</p>";
    ReceiptOutput.innerHTML += "<p><b>Total Order Cost:</b> $" + totalPrice.toFixed(2) + "</p>";
    ReceiptOutput.innerHTML += "<p><b>Change:</b> $" + change.toFixed(2);
    ReceiptOutput.innerHTML += "<p><b>Items Ordered:</b></p>";

    // Loop so pies are outputted with the amount before the name to avoid long lists e.g (2x Mince and Cheese)
    for (var i = 0; i < pies.length; i++) {
        if (piesOrdered[i] > 0) {
            ReceiptOutput.innerHTML += "<p>" + piesOrdered[i] + "x " + pies[i] + "</p>";
        }
    }
}

// Function for the auto price button, outputting to 2 decimal places
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
    piesOrdered = [0, 0, 0, 0];
}
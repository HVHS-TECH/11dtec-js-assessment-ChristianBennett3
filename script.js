/**************************************
Pie Shop
 *************************************/

/**************************************
Variables
 *************************************/

var pies = ["Mince and Cheese", "Steak and Cheese", "Butter Chicken", "Apple"];
var totalPrice = 0;
const ItemsOutput = document.getElementById("ItemsOutput");
const RecieptOutput = document.getElementById("RecieptOutput");
let orderInfo = {
    userName: "",
    userMoney: 0
};
var change;

/**************************************
Main Code
 *************************************/

/**************************************
Functions
 *************************************/

function addPie(_type, _price){
    console.log(_type, _price); 
    ItemsOutput.innerHTML += "<p>" + pies[_type] + ": $" + _price + "</p>";
    totalPrice = totalPrice + _price;
    console.log(totalPrice)
}

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    const MONEY_FIELD = document.getElementById("moneyField");
    orderInfo = {
        userName: NAME_FIELD.value,
        userMoney: Number(MONEY_FIELD.value),
    }

    if (typeof orderInfo.userName != 'string' || orderInfo.userName == "" || orderInfo.userName.length < 3){
        alert("Please enter a valid name")
        return
    }
    start()
}

function start(){
    RecieptOutput.innerHTML = "";
    change = orderInfo.userMoney - totalPrice;
    RecieptOutput.innerHTML += "<h3>Reciept:</h3>";
    RecieptOutput.innerHTML += "<p>Name: " + orderInfo.userName + "<br>Money: $" + orderInfo.userMoney.toFixed(2) + "</p>"; 
    RecieptOutput.innerHTML += "<p>Total Order Cost: $" + totalPrice.toFixed(2) + "</p>";
    RecieptOutput.innerHTML += "<p>Change: $" + change;
}
/**************************************
Pie Shop
 *************************************/

/**************************************
Variables
 *************************************/

var pies = ["Mince and Cheese", "Steak and Cheese", "Butter Chicken", "Apple"];
var totalPrice = 0;
const OrderOutput = document.getElementById("PieOrderOutput");
const ItemsOutput = document.getElementById("ItemsOutput");
const RecieptOutput = document.getElementById("ReceiptOutput")
let orderInfo = {
    userName: "",
    userMoney: 0
};

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
    OrderOutput.innerHTML += "<p>Customer: " + orderInfo.userName + "<br>Money: $" + orderInfo.userMoney.toFixed(2) + "</p>"; 

    OrderOutput.innerHTML += "<p>Total Order Cost: $" + totalPrice.toFixed(2) + "</p>";
    ReceiptOutput.innerHTML = "";
}
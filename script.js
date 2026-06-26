/**************************************
Pie Shop
 *************************************/

/**************************************
Variables
 *************************************/

var pies = ["Mince and Cheese", "Steak and Cheese", "Butter Chicken", "Apple"];
var orderInfo;
const OrderOutput = document.getElementById("PieOrderOutput");
const ItemsOutput = document.getElementById("ItemsOutput");

/**************************************
Main Code
 *************************************/



/**************************************
Functions
 *************************************/

function addPie(_type, _price){
    console.log(_type, _price); 
    ItemsOutput.innerHTML += "<p>" + pies[_type] + ": $" + _price + "</p>";
    
}

function getFormInput(){
    const NAME_FIELD = document.getElementById("nameField");
    const MONEY_FIELD = document.getElementById("moneyField");
    orderInfo = {
        userName: NAME_FIELD.value,
        userMoney: Number(MONEY_FIELD.value),
    }

    if (typeof orderInfo.userName != "string" || orderInfo.userName == "" || orderInfo.userName.length < 3){
        alert("Please enter a valid name")
        return
    }
    start()
}

function start(){
    OrderOutput.innerHTML += "<p>Name: " + orderInfo.userName + "<br>Money: " + orderInfo.userMoney + "</p>"
}


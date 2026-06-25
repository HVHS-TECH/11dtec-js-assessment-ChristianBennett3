/**************************************
Pie Shop
 *************************************/

/**************************************
Variables
 *************************************/

var pies = ["Mince and Cheese", "Steak and Cheese", "Butter Chicken", "Apple"];
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
    userInfo = {
        userName: NAME_FIELD.value,
        userMoney: Number(MONEY_FIELD.value),
    }
    OrderOutput.innerHTML += "<p>" + userInfo.userName + "<br>" + userInfo.userMoney + "</p>"
}
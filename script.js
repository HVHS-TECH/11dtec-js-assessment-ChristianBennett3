/**************************************
Pie Shop
 *************************************/

/**************************************
Variables
 *************************************/

var pies = ["Mince and Cheese", "Steak and Cheese", "Butter Chicken", "Apple"];
const pieOrderOutput = document.getElementById("PieOrderOutput")

/**************************************
Main Code
 *************************************/



/**************************************
Functions
 *************************************/

function addPie(_type, _price){
    console.log(_type, _price); 
    pieOrderOutput.innerHTML += "<p>" + pies[_type] + ": $" + _price + "</p>";
}
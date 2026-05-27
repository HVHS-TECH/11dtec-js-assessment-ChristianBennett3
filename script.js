var pies = ["minceCheese", "mince", "steakCheese", "steak", "butterChicken", "baconEgg", "potatoTop"]
var orderInfo;


function getFormInput(){
    const PIE_NAME_FIELD = document.getElementById("pieNameField");
    orderInfo = {
        userOrder: PIE_NAME_FIELD.value
    }
    console.log(orderInfo.userOrder)
}
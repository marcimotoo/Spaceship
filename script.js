const shipName = "Starfall";
let shipHealth = 100;
let shipInventory = ["Repair Kit", "Repair Kit"];
let shipCredits = 1000;


function showStatus () {
    console.log(shipName, "Health " + shipHealth, shipInventory, "Credits " + shipCredits );
}


function buyRepairKit() {
    if  (shipCredits > 200) {
        shipCredits = shipCredits - 200;
        shipInventory.push ("Repair Kit");
        console.log("Repair Kit added to your Inventory! Credits left = " + shipCredits + " Credits");
    }
    else {
        shipCredits < 200;
        console.log ("Not enouth Credits");
    }    
}

function shipDamage() {
    shipHealth.remove = -20;
}

function useRepairKit() {
    shipHealth = shipHealth + 25;
    if (shipHealth >= 100) {
        shipHealth = 100;
        shipInventory.pop("Reapair Kit");
    } 
    console.log("Ship repaired = " + "shiphall " + shipHealth );
}

showStatus();
shipDamage();
buyRepairKit();
showStatus();
useRepairKit();
showStatus();

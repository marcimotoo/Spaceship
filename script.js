const shipName = "Starfall";
let shipHealth = 100;
let repairKits = 2 ;
let shipCredits = 1000;


function showStatus () {
    console.log(shipName, "Status: " + shipHealth + "%:", "Repair Kits (" + repairKits + "):" , "Credits " + shipCredits + "$");
    document.getElementById('status').innerHTML = '<h2>haha</h2>';
}


function buyRepairKit() {
    if  (shipCredits > 200) {
        shipCredits = shipCredits - 900;
        repairKits = repairKits + 1
        console.log("Repair Kit added to your Inventory! " + shipCredits + "$ Credits left");
        // getStatus();
    }
    else {
        shipCredits < 200;
        console.log ("Not enouth $ Credits");
    }    
}

function shipDamage() {
    if (shipHealth >= 1) {
        shipHealth = shipHealth - 25;
        if (shipHealth > 0) {
            console.log("Ship is taking damage!! " + shipHealth + "%");
        }
        if (shipHealth <= 0) {
            console.log ("You Died!");
        }
    }
}

function useRepairKit() {
    if (shipHealth <= 100, repairKits >= 1) {
        repairKits = repairKits - 1;
        shipHealth = shipHealth + 25;
        console.log("Ship repaired! Shiphall = " + shipHealth + "%" );
        
    } 
    else {
        console.log("No Repair Kits left")
    }


}

showStatus();

// showStatus();
// buyRepairKit();
// buyRepairKit();
// showStatus();
// shipDamage();
// shipDamage();
// useRepairKit();
// useRepairKit();
// showStatus();
// shipDamage();
// shipDamage();
// useRepairKit();
// useRepairKit();
// showStatus();
// shipDamage();
// shipDamage();
// shipDamage();

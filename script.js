const shipName = "Starfall";
let shipHealth = 100;
let repairKits = 2;
let shipCredits = 1000;

document.getElementById("status_table").innerHTML = `
        <table>
            <tr>
                <th>Name</th>
                <td>${shipName}</td>
           </tr>
            <tr>
                <th>Leben</th>
                <td>${shipHealth}</td>
           </tr>
            <tr>
                <th>Repair Kits</th>
                <td>${repairKits}</td>
           </tr>
            <tr>
                <th>Credits</th>
                <td>${shipCredits}</td>
            </tr>
         </table>`;

document.getElementById("status_table").classList.toggle("table");
document.getElementById("status_table").classList.toggle("m_auto");

function buyRepairKit() {
  if (shipCredits > 200) {
    shipCredits = shipCredits - 900;
    repairKits = repairKits + 1;
    console.log("Repair Kit added to your Inventory! " + shipCredits + "$ Credits left");
    // getStatus();
  } else {
    shipCredits < 200;
    console.log("Not enouth $ Credits");
  }
}

function shipDamage() {
  if (shipHealth >= 1) {
    shipHealth = shipHealth - 25;
    if (shipHealth > 0) {
      console.log("Ship is taking damage!! " + shipHealth + "%");
    }
    if (shipHealth <= 0) {
      console.log("You Died!");
    }
  }
}

function useRepairKit() {
  if ((shipHealth <= 100, repairKits >= 1)) {
    repairKits = repairKits - 1;
    shipHealth = shipHealth + 25;
    console.log("Ship repaired! Shiphall = " + shipHealth + "%");
  } else {
    console.log("No Repair Kits left");
  }
}

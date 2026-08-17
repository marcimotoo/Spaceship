let shipHealth = 100;
let shipCargo = ["Repair Kit"];
const shipName = "Starfall";
let shipCredits = 1000;

function renderStatus() {
  document.getElementById("status_table").innerHTML = `
  <table class="table_design">
  <tr>
  <th>Name</th>
  <td>${shipName}</td>
  </tr>
  <tr>
  <th>Leben</th>
  <td>${shipHealth}</td>
  </tr>
  <tr>
  <th>Ship Cargo</th>
  <td>${shipCargo}</td>
  </tr>
  <tr>
  <th>Credits</th>
  <td>${shipCredits}</td>
  </tr>
  </table>`;

  document.getElementById("status_table").classList.add("table");
  document.getElementById("status_table").classList.toggle("m_auto");
}

function showMessage(text) {
  document.getElementById("error").innerHTML = text;
}

function takingDamage() {
  let damage = Number(document.getElementById("damage_input").value);
  if (shipHealth > 0) {
    if (shipHealth <= 0) {
      shipHealth = shipHealth = 0;
    }
    if (shipCargo.includes("Shield")) {
      damage = damage * 0.5;
    }
    if (damage <= 0) {
      showMessage("haha");
    }
    shipHealth = shipHealth - damage; // schadenshöhe mit input verlinken
    showMessage("!ALARM! you taking damage!!");
    renderStatus();
  }
  if (damage <= 0) {
    showMessage("type in damage input");
  }
  if (shipHealth <= 0) {
    document.getElementById("gameover").innerHTML = "<h2>Game Over</h2>";
    document.getElementById("gameover").classList.toggle("alarm-red");
  }
}

function takingDamage25() {
  shipHealth = shipHealth - 25;
  renderStatus();
}

function takingDamage50() {
  shipHealth = shipHealth - 50;
  renderStatus();
}

function takingDamage100() {
  shipHealth = shipHealth - 100;
  renderStatus();
}

function buyShield() {
  if (shipCredits >= 500 && !shipCargo.includes("Shield")) {
    shipCredits = shipCredits - 500;
    shipCargo.push("Shield");
    showMessage("Shield added to your Inventory");
    renderStatus();
  } else if (shipCargo.includes("Shield")) {
    showMessage("Shield already installed");
  } else {
    showMessage("Not enouth $ Credits");
  }
}

function buyRepairKit() {
  let repairKitNumber = Number(document.getElementById("kit_input").value);
  if (shipCredits >= repairKitNumber * 250) {
    for (let index = 0; index < repairKitNumber; index++) {
      shipCargo.push("Repair Kit");
    }
    shipCredits = shipCredits - repairKitNumber * 250;

    renderStatus();
    showMessage("repair kit added to your inventory");
    if (repairKitNumber <= 0) {
      showMessage("Type in amount of Repair Kits");
    }
  } else {
    showMessage("Not enouth $ Credits");
  }
}
function useRepairKit() {
  if (shipHealth > 0 && shipHealth < 100 && shipCargo.includes("Repair Kit")) {
    shipCargo.splice(shipCargo.indexOf("Repair Kit"), 1);
    shipHealth = shipHealth + 25;
    showMessage("ship repaired!");
    renderStatus();
    if (shipHealth >= 100) {
      shipHealth = shipHealth = 100;
      renderStatus();
    }
  } else {
    showMessage("no repair kits left!");
  }
}

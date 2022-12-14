// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;  
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const MoneyBoxAna = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

function createPetList() {
  // Tu código aquí 👈
  const savePetsList = [];
  function addPet(pets) {
    if (pets) {
      savePetsList.push(pets);
    } 
    return savePetsList;
  }
  return addPet();
}

const myPetsList = createPetList();

myPetsList('michi');
myPetsList('firulais');
myPetsList();
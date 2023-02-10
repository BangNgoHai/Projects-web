let xp = 0;
let health = 100;
let gold = 100;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];


const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterNameText = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealth');


const weapons = [{
    name:"stick",
    power: 50
},
{
    name:"dagger",
    power: 30
},
{
    name:"claw hammer",
    power: 70
},
{
    name:"sword",
    power: 100
}
];

const monsters = [
    {
        name:"slime",
        level: 2,
        health: 15
    },
    {
        name:"fanged beast",
        level: 8,
        health: 60
    },
    {
        name:"dragon",
        level: 20,
        health: 300
    }
];

const locations = [   // location array to update the Button's location
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight Dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are now in town square.",
    },
    {
        name: "go store",
        "button text": ["Buy 10 health ( 10 gold)", "Buy weapon (30 gold)", "Go to town"],
        "button functions" : [buyHealth, buyWeapon, goTown],
        text: "You enter the Store ",
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged Beast", "Go to town"],
        "button functions" : [fightSlime, fightBeast, goTown],
        text: "You enter the Cave,now you see some monsters.",
    },
    {
        name: "fight",
        "button text": ["Attack!", "Dodge!", "Run!"],
        "button functions" : [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "monster killed",
        "button text": ["Go to town", "Go to town", "Go to town"],
        "button functions" : [goTown, goTown, goTown],
        text: "You killed the monster.You gain some gold and experience"
    },
    {
        name: "lose",
        "button text": ["Replay?", "Relay?", "Replay?"],
        "button functions" : [restart, restart, restart],
        text: "You have been killed,would you like to playagain?"
    },
    {
        name: "win",
        "button text": ["Replay?"," Replay?","Replay?"],
        "button functions" : [restart, restart, restart],
        text: "You defeated the Dragon,YOU WON!CONGRATS SIUUUUUUUUUUUUU!!!"
    }
]

// initallize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    monsterStats.style.display = "none";
    button1.innerText = location["button text"][0]; 
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;  // or use location[""][] both will work
}

function goTown(){
    update(locations[0]);   //call the update function above,locations is the locations array ,0 is the first array
}

function goStore() {
    update(locations[1]);
}
  
function goCave() {
    update(locations[2]);
}


function buyHealth() {
    if (gold >= 10) {
        gold = gold - 10
        health = health + 10
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You dont have enough gold!buy more gold"
    }
}

function buyWeapon() {
    if(currentWeapon < weapons.length - 1 ){
        if (gold >= 30) {
            gold = gold - 30;
            currentWeapon = currentWeapon + 1 ; // add one more weapon to the currentWeapon
            let newWeapon = weapons[currentWeapon].name;    
            goldText.innerText = gold;
            text.innerText = "You now have a new weapon " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += "In your Inventory  you now have: " + inventory
        } else {
            text.innerText = "You dont have enough gold!buy more"
        }
    }else {
        text.innerText = "You already have a enough weapon in your backet";
        button2.innerText = "sell one weapon for 15 gold";
        button2.onclick = sellWeapon;
    }
}

function sellWeapon() {
    if(inventory.length > 1) {  // at least one weapon in pocket
        gold = gold + 15
        goldText.innerText = gold;
        let currentWeapon = inventory.shift(); // shift is now remove the first element of the Array from inventory and let its = currentWeapon
        text.innerText = "You have sold " + currentWeapon + ".";
        text.innerText += " In Your Inventory you now have: " + inventory + ".";
    }else{
        text.innerText = "Dont sell your only Weapon in Pocket";
    }
}

function fightSlime() {
    fighting = 0;
    goFight(); // call the goFight function bellow
}

function fightBeast() {
    fighting = 1;
    goFight(); 
}

function fightDragon() {
    fighting = 2;
    goFight(); 
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health; // from the list of monster array 
    monsterStats.style.display = "block"; // .style.disply is how we update the Css Style through Javascript
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth; // monsterHealth we already have above
} 

function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText = "You attack it with your " + weapons[currentWeapon].name + "."; 
    health = health - monsters[fighting].level;
    monsterHealth = monsterHealth - weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1; //Math.random is to create a random Number between 1 and 0
    healthText.innerText = health; // update the healthText after the Fight
    monsterHealthText.innerText = monsterHealth; // update the monsterHealthText after the Fight 
    if (health <= 0) {
        lose(); // call the lose function
    }else if (monsterHealth <= 0) {    //else if statement to check if MonsterHealth is <= 0
        if (fighting === 2) {   // or we can use (fighting === 2 ? winGame() : defeatMonster();)
            winGame();          
        }else {
            defeatMonster(); // call the defeatMonster function
        }
    }
}

function dodge() {
    text.innerText = "You dodge the attack from the " + monster[fighting].name + ".";
}

function lose() {
    update(locations[5]);
}

function winGame() {
    update(locations[6]);    
}


function defeatMonster() {
    gold = gold + Math.floor(monsters[fighting].level * 6.7);
    xp = xp + monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function restart() { // after lose want to set all the Values to Settings at Beginning and then go to Towm 
    xp = 0;
    health = 100;
    gold = 50;
    currentWeapon = 0;
    inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();  // after we click the restart button go ahead and call goTown function and go to Town
}





































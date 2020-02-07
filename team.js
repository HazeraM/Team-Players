// inquirer npm package
var inquirer = require("inquirer");

// constructor function to create player objects
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;

    // if the coin flip value equals to 0, then this.offense goes up by one point.
    this.goodgame = function () {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense++;
            console.log(this.name + "offense has gone up!");
        } else {
            this.defense++;
            console.log(this.name + "defense has gone up!");
        }
    };
    this.badgame = function() {
        if (Math.floor(Math.random() * 2) === 0) {
            this.offense--;
            console.log(this.name + "offense has gone down!");
        } else {
            this.defense--;
            console.log(this.name + "defense has gone down!");
        }
    };

    this.printStats = function() {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffense " + this.offense + "\nDefense " + this.defense) 
    };
}

// arrays to create starters and subs
var starters = [];
var subs = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer =  function() {
    // if the length of the array is 5 or higher, no more questions will be asked
    if (starters.length + subs.length < 5) {
    console.log("\New Player!\n");
    inquirer.prompt ([
        {
            name: "name",
            message: "Player's name: "
        }, 
        {
           name: "position", 
           message: "Player's position: "
        },
        {
            name: "offense",
            message: "Player's offensive ability: ",
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <=10) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "defense",
            message: "Player's defensive ability: ",
            validate: function(value) {
                if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <=10) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answers){
     // initializes the variable player to be a player object which will
      // take in all of the user's answers to the questions above   
      var player = new Player(
          answers.name,
          answers.position,
           // turns the offense and defense variables into integers as well with parseInt
          parseInt(answers.offense),
          parseInt(answers.defense));
        // adds a player to the starters array if there are less than five player objects in it.
        // otherwise adds the newest player object to the subs array  
        if (starters.length < 3) {
            starters.push(player);
            console.log(player.name + " added to the starters!")
        } else {
            subs.push(player)
            console.log(player.name + " added to the subs!")
        }
         // runs the createPlayer function 
         createPlayer();
    });
    

  } else {
     // loops through the arrays and calls printStats() for each object it contains
     for (var i = 0; i < starters.length; i++) {
         for (var j = 0; j < subs.length; j++){
         console.log(starters[i].sub[j].printStats());
     }
    } 
}
};



// calls the function createPlayer() to start the code
createPlayer();


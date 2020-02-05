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


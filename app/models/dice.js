// This is the code that actually handles the functionality of the application.
//var Dice = function(sides){
module.exports = function(sides){
  this.sides = sides;
  this.roll = function(){
    myRoll = Math.floor(Math.random() * 6) + 1;
    return myRoll;
  };
};

//var myDice = new Dice(6);

//myDice.roll();

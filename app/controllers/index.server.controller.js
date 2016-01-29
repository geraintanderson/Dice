exports.render = function(req, res){
  //res.send('Hello World');

  // This might be completely the wrong place to call this so it needs moving when I learn more!
  var dice = require('../models/dice');
  myDice = new dice(6)
  // End of the bit that needs moving

  res.render('index', {
    roll: myDice.roll()
  });
};

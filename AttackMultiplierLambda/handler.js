'use strict';

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.attackMultiplier = (event, context, callback) => {
  let multiplier = getRandomIntInclusive(0, 2),
      turn  = event;
    
  turn.Attack.Strength = multiplier * turn.Attack.Strength;

  callback(null, turn);
};
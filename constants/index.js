const grid = require('./grid');
const robot = require('./robot');
const tiles = require('./tiles');
const time = require('./time');

module.exports = { ...grid, ...robot, ...tiles, ...time };

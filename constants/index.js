const grid = require('./grid');
const robot = require('./robot');
const tiles = require('./tiles');

module.exports = { ...grid, ...robot, ...tiles };

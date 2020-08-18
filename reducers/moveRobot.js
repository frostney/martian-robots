const { MOVE, FORWARD, NORTH, SOUTH, WEST, EAST } = require('../constants');

const moveRobot = ({ x, y, direction }, action = {}) => {
  if (action.type === MOVE) {
    if (action.payload === FORWARD) {
      switch (direction) {
        case NORTH:
          return { direction, x, y: y + 1 };
        case SOUTH:
          return { direction, x, y: y - 1 };
        case WEST:
          return { direction, y, x: x - 1 };
        case EAST:
          return { direction, y, x: x + 1 };
        default:
          return { x, y, direction };
      }
    }
  }

  return { x, y, direction };
};

module.exports = moveRobot;

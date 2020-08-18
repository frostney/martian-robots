const {
  ROTATE,
  LEFT,
  RIGHT,
  NORTH,
  WEST,
  SOUTH,
  EAST,
} = require('../constants');

const changeDirection = (direction = NORTH, action = {}) => {
  if (action.type === ROTATE) {
    switch (action.payload) {
      case LEFT:
        if (direction === NORTH) {
          return WEST;
        }

        if (direction === WEST) {
          return SOUTH;
        }

        if (direction === SOUTH) {
          return EAST;
        }

        if (direction === EAST) {
          return NORTH;
        }
        break;
      case RIGHT:
        if (direction === NORTH) {
          return EAST;
        }

        if (direction === EAST) {
          return SOUTH;
        }

        if (direction === SOUTH) {
          return WEST;
        }

        if (direction === WEST) {
          return NORTH;
        }
        break;
      default:
        return direction;
    }
  }

  return direction;
};

module.exports = changeDirection;

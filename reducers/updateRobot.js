const { ROTATE, MOVE, SET_ROBOT } = require('../constants');

const changeDirection = require('./changeDirection');
const moveRobot = require('./moveRobot');

const updateRobot = (currentRobot, action) => {
  switch (action.type) {
    case ROTATE:
      return {
        ...currentRobot,
        direction: changeDirection(currentRobot.direction, action),
      };

    case MOVE: {
      return {
        ...currentRobot,
        ...moveRobot(currentRobot, action),
      };
    }

    case SET_ROBOT: {
      const [x, y, direction] = action.payload;

      return { x, y, direction };
    }

    default:
      return currentRobot;
  }
};

module.exports = updateRobot;

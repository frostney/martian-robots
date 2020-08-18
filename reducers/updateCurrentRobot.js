const {
  ROTATE,
  MOVE,
  FORWARD,
  NORTH,
  SOUTH,
  WEST,
  EAST,
  SET_ROBOT,
} = require('../constants');

const changeDirection = require('./changeDirection');

const updateCurrentRobot = (currentRobot, action) => {
  switch (action.type) {
    case ROTATE:
      return {
        ...currentRobot,
        direction: changeDirection(currentRobot.direction, action),
      };

    case MOVE: {
      if (action.payload === FORWARD) {
        switch (currentRobot.direction) {
          case NORTH:
            return { ...currentRobot, y: currentRobot.y + 1 };
          case SOUTH:
            return { ...currentRobot, y: currentRobot.y - 1 };
          case WEST:
            return { ...currentRobot, x: currentRobot.x - 1 };
          case EAST:
            return { ...currentRobot, x: currentRobot.x + 1 };
          default:
            return currentRobot;
        }
      }
      return currentRobot;
    }

    case SET_ROBOT: {
      const [x, y, direction] = action.payload;

      return { x, y, direction };
    }

    default:
      return currentRobot;
  }
};

module.exports = updateCurrentRobot;

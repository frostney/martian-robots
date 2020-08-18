const { ROTATE, MOVE, SET_ROBOT } = require('./constants');

const modifyTilemap = ({ tiles, currentRobot }, action) => {
  switch (action.type) {
    case ROTATE:
      return {
        tiles,
        currentRobot,
      };

    case MOVE:
      return {
        tiles,
        currentRobot,
      };

    case SET_ROBOT:
      return {
        tiles,
        currentRobot,
      };

    default:
      return {
        tiles,
        currentRobot,
      };
  }
};

module.exports = modifyTilemap;

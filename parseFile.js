const {
  GRID_MAX_WIDTH,
  GRID_MAX_HEIGHT,
  NORTH,
  WEST,
  EAST,
  SOUTH,
  LEFT,
  RIGHT,
  FORWARD,
  MOVE,
  ROTATE,
} = require('./constants');

const splitCoordinate = (coordinate) =>
  coordinate.split(' ').map((str) => parseInt(str, 10) || 0);
const splitCoordinateWithDirection = (coordinateAndDirection) => {
  const coordinateArray = coordinateAndDirection.split(' ');

  const x = parseInt(coordinateArray[0], 10) || 0;
  const y = parseInt(coordinateArray[1], 10) || 0;
  const direction = (() => {
    switch (coordinateArray[2]) {
      case 'N':
        return NORTH;
      case 'W':
        return WEST;
      case 'E':
        return EAST;
      default:
        return SOUTH;
    }
  })();

  return [x, y, direction];
};

const parseFile = (content) => {
  const lines = content.split('\n');

  const [gridWidth, gridHeight] = splitCoordinate(lines[0]);
  const robots = [];

  if (gridWidth > GRID_MAX_WIDTH) {
    throw new Error(`Grid width ${gridWidth} is higher than maximum.`);
  }

  if (gridHeight > GRID_MAX_HEIGHT) {
    throw new Error(`Grid height ${gridHeight} is higher than maximum.`);
  }

  // Remove first line
  lines.shift();

  for (let i = 0; i < lines.length - 1; i += 2) {
    const [x, y, direction] = splitCoordinateWithDirection(lines[i]);
    const actions = lines[i + 1]
      .split('')
      .map((action) => {
        switch (action) {
          case 'L':
            return {
              type: ROTATE,
              payload: LEFT,
            };
          case 'R':
            return { type: ROTATE, payload: RIGHT };
          case 'F':
            return { type: MOVE, payload: FORWARD };
          default:
            return '';
        }
      })
      .filter((item) => item);

    robots.push({
      x,
      y,
      direction,
      actions,
    });
  }

  return {
    gridWidth,
    gridHeight,
    robots,
  };
};

module.exports = parseFile;

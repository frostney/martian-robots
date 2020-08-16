const { GRID_MAX_WIDTH, GRID_MAX_HEIGHT } = require('./constants');

const splitCoordinate = (coordinate) => coordinate.split(' ');

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
    const [x, y, direction] = splitCoordinate(lines[i]);
    const actions = lines[i + 1]
      .split('')
      .map((action) => {
        switch (action) {
          case 'L':
            return 'LEFT';
          case 'R':
            return 'RIGHT';
          case 'F':
            return 'FORWARD';
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

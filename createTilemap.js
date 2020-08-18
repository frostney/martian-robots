const { EMPTY, NONE } = require('./constants');

const createTilemap = (width, height) => {
  return [...Array(width)].map((x) =>
    [...Array(height)].map((y) => ({
      x,
      y,
      background: EMPTY,
      robot: NONE,
    })),
  );
};

module.exports = createTilemap;

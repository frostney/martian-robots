const { EMPTY, NONE } = require('../constants');

const createTilemap = (width, height) => {
  return [
    ...Array(height).fill([
      ...Array(width).fill({
        background: EMPTY,
        robot: NONE,
      }),
    ]),
  ];
};

module.exports = createTilemap;

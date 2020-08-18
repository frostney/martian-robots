const { EMPTY, NONE } = require('../constants');

const createTilemap = (width, height) => {
  return [
    ...Array(width).fill([
      ...Array(height).fill({
        background: EMPTY,
        robot: NONE,
      }),
    ]),
  ];
};

module.exports = createTilemap;

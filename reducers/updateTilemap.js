const {
  SET_ROBOT,
  MOVE,
  FORWARD,
  NORTH,
  SOUTH,
  WEST,
  EAST,
} = require('../constants');
const { cloneTilemap } = require('../utils');

const updateTilemap = (tiles, action) => {
  switch (action.type) {
    case SET_ROBOT: {
      const clonedTiles = cloneTilemap(tiles);

      const { x, y, direction, command } = action.payload;

      try {
        clonedTiles[x][y].robot = direction;

        if (command.type === MOVE) {
          if (command.payload === FORWARD) {
            if (direction === NORTH) {
              clonedTiles[x][y - 1].robot = 'NONE';
            }

            if (direction === SOUTH) {
              clonedTiles[x][y + 1].robot = 'NONE';
            }

            if (direction === WEST) {
              clonedTiles[x + 1][y].robot = 'NONE';
            }

            if (direction === EAST) {
              clonedTiles[x - 1][y].robot = 'NONE';
            }
          }
        }
      } catch (err) {
        console.info('Robot out of bounds.');
      }

      return clonedTiles;
    }

    default:
      return tiles;
  }
};

module.exports = updateTilemap;

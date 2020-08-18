const cloneTilemap = (tiles) => {
  return tiles.map((row) => row.map((data) => ({ ...data })));
};

module.exports = cloneTilemap;

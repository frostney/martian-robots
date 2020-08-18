const createTilemap = require('./createTilemap');

describe('Given a createTilemap function', () => {
  it('should return an empty array for an empty tilemap', () => {
    expect(createTilemap(0, 0)).toStrictEqual([]);
  });

  it('should return a tilemap of the given size', () => {
    const tilemap = createTilemap(2, 2);

    expect(tilemap.length).toBe(2);
    expect(tilemap[0].length).toBe(2);
  });
});

const {
  NORTH,
  SOUTH,
  WEST,
  EAST,
  ROTATE,
  LEFT,
  RIGHT,
} = require('../constants');
const changeDirection = require('./changeDirection');

describe('Given the changeDirection function', () => {
  it('should not change direction without an action', () => {
    expect(changeDirection()).toBe(NORTH);
  });

  it('should update the direction to the LEFT', () => {
    expect(changeDirection(NORTH, { type: ROTATE, payload: LEFT })).toBe(WEST);
    expect(changeDirection(WEST, { type: ROTATE, payload: LEFT })).toBe(SOUTH);
    expect(changeDirection(SOUTH, { type: ROTATE, payload: LEFT })).toBe(EAST);
    expect(changeDirection(EAST, { type: ROTATE, payload: LEFT })).toBe(NORTH);
  });

  it('should update the direction to the RIGHT', () => {
    expect(changeDirection(NORTH, { type: ROTATE, payload: RIGHT })).toBe(EAST);
    expect(changeDirection(EAST, { type: ROTATE, payload: RIGHT })).toBe(SOUTH);
    expect(changeDirection(SOUTH, { type: ROTATE, payload: RIGHT })).toBe(WEST);
    expect(changeDirection(WEST, { type: ROTATE, payload: RIGHT })).toBe(NORTH);
  });
});

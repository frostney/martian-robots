const React = require('react');
const PropTypes = require('prop-types');
const { Text } = require('ink');

const { NORTH, SOUTH, EAST, WEST } = require('../../constants');

const Robot = ({ direction }) => {
  switch (direction) {
    case NORTH:
      return <Text> ↑ </Text>;
    case SOUTH:
      return <Text> ↓ </Text>;
    case EAST:
      return <Text> → </Text>;
    case WEST:
      return <Text> ← </Text>;
    default:
      return null;
  }
};

Robot.propTypes = {
  direction: PropTypes.oneOf([NORTH, SOUTH, EAST, WEST]),
};

Robot.defaultProps = {
  direction: NORTH,
};

module.exports = Robot;

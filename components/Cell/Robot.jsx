const React = require('react');
const PropTypes = require('prop-types');
const { Text, Box } = require('ink');

const { NORTH, SOUTH, EAST, WEST } = require('../../constants');

const Robot = ({ direction }) => {
  switch (direction) {
    case NORTH:
      return (
        <Box marginLeft={1} marginRight={1}>
          <Text> ↑ </Text>
        </Box>
      );
    case SOUTH:
      return (
        <Box marginLeft={1} marginRight={1}>
          <Text> ↓ </Text>
        </Box>
      );
    case EAST:
      return (
        <Box marginLeft={1} marginRight={1}>
          <Text> → </Text>
        </Box>
      );
    case WEST:
      return (
        <Box marginLeft={1} marginRight={1}>
          <Text> ← </Text>
        </Box>
      );
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

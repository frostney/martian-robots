/* eslint-disable react/no-array-index-key */
const React = require('react');
const PropTypes = require('prop-types');
const { Box, Text } = require('ink');

const abbreviateDirection = (direction) => direction[0];

const Sidebar = ({ command, robots }) => {
  return (
    <Box borderStyle="round" flexDirection="column">
      <Text> Current command </Text>
      <Text> {`${command.type} - ${command.payload}`} </Text>
      <Text> ----</Text>
      <Text> Output</Text>
      {Object.values(robots).map(({ x, y, direction }, index) => (
        <Text key={`robot-${index}`}>
          {x} {y} {abbreviateDirection(direction)}
        </Text>
      ))}
    </Box>
  );
};

Sidebar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  command: PropTypes.shape({ type: PropTypes.string, payload: PropTypes.any }),
  robots: PropTypes.objectOf(PropTypes.object),
};

Sidebar.defaultProps = {
  command: {},
  robots: {},
};

module.exports = Sidebar;

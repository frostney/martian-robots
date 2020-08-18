/* eslint-disable react/no-array-index-key */
const React = require('react');
const PropTypes = require('prop-types');
const { Box, Text } = require('ink');

const abbreviateDirection = (direction) => direction[0];

const Sidebar = ({ command, output }) => {
  return (
    <Box borderStyle="round" flexDirection="column">
      <Text> Current command </Text>
      <Text> {command} </Text>
      <Text> ----</Text>
      <Text> Output</Text>
      {Object.values(output).map(({ x, y, direction }, index) => (
        <Text key={`robot-${index}`}>
          {x} {y} {abbreviateDirection(direction)}
        </Text>
      ))}
    </Box>
  );
};

Sidebar.propTypes = {
  command: PropTypes.string,
  output: PropTypes.objectOf(PropTypes.object),
};

Sidebar.defaultProps = {
  command: '',
  output: {},
};

module.exports = Sidebar;

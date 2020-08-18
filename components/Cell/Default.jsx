const React = require('react');
const PropTypes = require('prop-types');
const { Text } = require('ink');

const Default = ({ x, y }) => {
  return (
    <Text>
      {x} | {y}
    </Text>
  );
};

Default.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

Default.defaultProps = {
  x: 0,
  y: 0,
};

module.exports = Default;

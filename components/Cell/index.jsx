const React = require('react');
const { Box } = require('ink');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');

const Robot = importJsx('./Robot');
const Scent = importJsx('./Scent.jsx');
const Default = importJsx('./Default.jsx');

const Cell = ({ type, x, y, direction }) => {
  let content = null;

  switch (type) {
    case 'scent':
      content = <Scent />;
      break;
    case 'robot':
      content = <Robot direction={direction} />;
      break;
    default:
      content = <Default x={x} y={y} />;
      break;
  }

  return (
    <Box borderStyle="round" marginRight={1}>
      {content}
    </Box>
  );
};

Cell.propTypes = {
  type: PropTypes.oneOf(['scent', 'robot', 'default']),
  x: PropTypes.number,
  y: PropTypes.number,
  direction: PropTypes.string,
};

Cell.defaultProps = {
  type: 'default',
  x: 0,
  y: 0,
  direction: '',
};

module.exports = Cell;

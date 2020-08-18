const React = require('react');
const { Box } = require('ink');
const PropTypes = require('prop-types');
const importJsx = require('import-jsx');

const Robot = importJsx('./Robot.jsx');
const Scent = importJsx('./Scent.jsx');
const Default = importJsx('./Default.jsx');

const Cell = ({ data, x, y }) => {
  let content = null;

  if (data.robot === 'NONE') {
    switch (data.background) {
      case 'SCENT':
        content = <Scent />;
        break;
      default:
        content = <Default x={x} y={y} />;
        break;
    }
  } else {
    content = <Robot direction={data.robot} />;
  }

  return (
    <Box borderStyle="round" marginRight={1}>
      {content}
    </Box>
  );
};

Cell.propTypes = {
  data: PropTypes.shape({
    background: PropTypes.oneOf(['EMPTY', 'SCENT']),
    robot: PropTypes.oneOf(['NONE', 'NORTH', 'SOUTH', 'WEST', 'EAST']),
  }),
  x: PropTypes.number,
  y: PropTypes.number,
};

Cell.defaultProps = {
  data: {},
  x: 0,
  y: 0,
};

module.exports = Cell;

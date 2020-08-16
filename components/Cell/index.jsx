const React = require('react');

const Robot = require('./Robot');
const Scent = require('./Scent');
const Default = require('./Default');

const Cell = ({ type, ...props }) => {
  switch (type) {
    case 'scent':
      return <Scent {...props} />;
    case 'robot':
      return <Robot {...props} />;
    default:
      return <Default />;
  }
};

Cell.propTypes = {
  type: PropTypes.oneOf(['scent', 'robot', 'default']),
};

module.exports = Cell;

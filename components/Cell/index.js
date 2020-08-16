const React = require('react');

const Robot = require('./Robot');
const Default = require('./Default');

const Cell = ({ type, ...props }) => {
    switch (type) {
        case 'scent': <Scent {...props} />; break;
        case 'robot': <Robot {...props} />; break;
        default:
            <Default />
    }
};

Cell.propTypes = {
    type: PropTypes.oneOf(['scent', 'robot', 'default'])
};

module.exports = Cell;
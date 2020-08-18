const React = require('react');
const PropTypes = require('prop-types');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const { DELAY } = require('./constants');
const { updateRobot } = require('./reducers');

const Tilemap = importJsx('./components/Tilemap.jsx');
const Sidebar = importJsx('./components/Sidebar.jsx');

const { useEffect, useState } = React;

const MartianRobot = ({ tiles, actions }) => {
  const [robots, setRobots] = useState({});
  const [command, setCommand] = useState('');
  // console.log(robots);

  useEffect(() => {
    actions.forEach((action, j) => {
      setTimeout(() => {
        setCommand(`${action.type} - ${action.payload}`);
        setRobots((currentValue) => ({
          ...currentValue,
          [action.count]: updateRobot(currentValue[action.count], action),
        }));
      }, DELAY * j);
    });
  }, []);

  return (
    <Box>
      <Tilemap tiles={tiles} />
      <Sidebar command={command} robots={robots} />
    </Box>
  );
};

MartianRobot.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  actions: PropTypes.arrayOf(PropTypes.object),
};

MartianRobot.defaultProps = {
  tiles: [],
  actions: [],
};

module.exports = MartianRobot;

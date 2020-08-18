const React = require('react');
const PropTypes = require('prop-types');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const { DELAY } = require('./constants');
const { updateCurrentRobot } = require('./reducers');

const Tilemap = importJsx('./components/Tilemap.jsx');
const Sidebar = importJsx('./components/Sidebar.jsx');

const { useEffect, useState } = React;

const MartianRobot = ({ tiles, robots }) => {
  const [robotPos, setRobotPos] = useState({});
  const [command, setCommand] = useState('');
  // console.log(robots);

  useEffect(() => {
    robots.forEach((action, j) => {
      setTimeout(() => {
        setCommand(`${action.type} - ${action.payload}`);
        setRobotPos((currentValue) => ({
          ...currentValue,
          [action.count]: updateCurrentRobot(
            currentValue[action.count],
            action,
          ),
        }));
      }, DELAY * j);
    });
  }, []);

  return (
    <Box>
      <Tilemap tiles={tiles} />
      <Sidebar command={command} output={robotPos} />
    </Box>
  );
};

MartianRobot.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  robots: PropTypes.arrayOf(PropTypes.object),
};

MartianRobot.defaultProps = {
  tiles: [],
  robots: [],
};

module.exports = MartianRobot;

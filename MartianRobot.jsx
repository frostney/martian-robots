const React = require('react');
const PropTypes = require('prop-types');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const { DELAY, SET_ROBOT } = require('./constants');
const { updateRobot, updateTilemap } = require('./reducers');

const Tilemap = importJsx('./components/Tilemap.jsx');
const Sidebar = importJsx('./components/Sidebar.jsx');

const { useEffect, useState } = React;

const MartianRobot = ({ initialTiles, actions }) => {
  const [robots, setRobots] = useState({});
  const [command, setCommand] = useState('');
  const [tiles, setTiles] = useState(initialTiles);

  useEffect(() => {
    actions.forEach((action, j) => {
      setTimeout(() => {
        setCommand(action);

        setRobots((currentValue) => ({
          ...currentValue,
          [action.count]: updateRobot(currentValue[action.count], action),
        }));
      }, DELAY * j);
    });
  }, []);

  useEffect(() => {
    Object.values(robots).forEach((payload) => {
      setTiles((currentValue) =>
        updateTilemap(currentValue, {
          type: SET_ROBOT,
          payload: { ...payload, command },
        }),
      );
    });
  }, [robots, command]);

  return (
    <Box>
      <Tilemap tiles={tiles} />
      <Sidebar command={command} robots={robots} />
    </Box>
  );
};

MartianRobot.propTypes = {
  initialTiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  actions: PropTypes.arrayOf(PropTypes.object),
};

MartianRobot.defaultProps = {
  initialTiles: [],
  actions: [],
};

module.exports = MartianRobot;

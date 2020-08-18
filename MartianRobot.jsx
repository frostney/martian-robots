const React = require('react');
const PropTypes = require('prop-types');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const Tilemap = importJsx('./components/Tilemap.jsx');
const Sidebar = importJsx('./components/Sidebar.jsx');

const { useEffect, useState } = React;

const MartianRobot = ({ tiles, robots }) => {
  const [currentRobot, setCurrentRobot] = useState(0);
  console.log(currentRobot);

  useEffect(() => {
    robots.forEach((robot, i) => {
      setCurrentRobot(i);
      robot.actions.forEach((action, j) => {
        setTimeout(() => {
          console.log(action);
        }, 500 * j);
      });
    });
  }, []);

  return (
    <Box>
      <Tilemap tiles={tiles} />
      <Sidebar />
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

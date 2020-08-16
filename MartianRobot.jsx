const React = require('react');
const { render, Box, useApp } = require('ink');

const { useEffect } = React;

const MartianRobot = () => {
  const { exit } = useApp();

  // Exit the app after 5 seconds
  useEffect(() => {
    setTimeout(() => {
      exit();
    }, 5000);
  }, []);

  return <Box />;
};

render(<MartianRobot />);

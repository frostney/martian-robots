const React = require('react');
const { render, useApp } = require('ink');
const importJsx = require('import-jsx');

const { readFileSync } = require('fs');

const parseFile = require('./parseFile');
const createTilemap = require('./createTilemap');

const MartianRobot = importJsx('./MartianRobot.jsx');

const { useEffect } = React;

const arg = process.argv[2];

let filename;

let tiles = [];
let robots = [];
let timeout = 3000;

if (!arg) {
  filename = 'sample.txt';
}

try {
  const content = readFileSync(filename).toString();

  const parsedFile = parseFile(content);
  const { gridWidth, gridHeight } = parsedFile;
  robots = parsedFile.robots;
  tiles = createTilemap(gridWidth, gridHeight);
  timeout = robots.reduce((acc, curr) => {
    return acc + curr.actions.length * 500;
  }, 0);
} catch (err) {
  console.error(`Cannot read file: ${err}`);
}

const App = () => {
  const { exit } = useApp();

  useEffect(() => {
    setTimeout(() => {
      exit();
    }, timeout);
  }, []);

  return <MartianRobot tiles={tiles} robots={robots} />;
};

render(<App />);

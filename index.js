const { readFileSync } = require('fs');
const importJsx = require('import-jsx');

const parseFile = require('./parseFile');

const arg = process.argv[2];
let filename;

if (!arg) {
  filename = 'sample.txt';
}

try {
  const content = readFileSync(filename).toString();

  parseFile(content);
} catch (err) {
  console.error(`Cannot read file: ${err}`);
}

importJsx('./MartianRobot.jsx');

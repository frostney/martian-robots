/* eslint-disable react/no-array-index-key */
const React = require('react');
const PropTypes = require('prop-types');
const { Box } = require('ink');
const importJsx = require('import-jsx');

const Cell = importJsx('./Cell/index.jsx');

const Tilemap = ({ tiles }) => {
  return (
    <Box flexDirection="column-reverse">
      {tiles.map((row, x) => {
        return (
          <Box key={`row-${x}`}>
            {row.map((data, y) => {
              return <Cell key={`x${x}-y${y}`} x={x} y={y} type={data} />;
            })}
          </Box>
        );
      })}
    </Box>
  );
};

Tilemap.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
};

Tilemap.defaultProps = {
  tiles: [],
};

module.exports = Tilemap;

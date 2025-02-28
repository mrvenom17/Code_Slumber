import React from 'react';
import Bars from './Bars';

const Visualizer = ({ array }) => {
  return (
    <div className="visualizer-container">
      <Bars array={array} />
    </div>
  );
};

export default Visualizer;
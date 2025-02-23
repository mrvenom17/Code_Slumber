import React from 'react';

const Visualizer = ({ array }) => {
  return (
    <div className="visualizer-container">
      <div className="bars-container">
        {array.map((value, idx) => {
          const barWidth = Math.max(8, (window.innerWidth - 250) / array.length);
          return (
            <div key={idx} className="bar" style={{ height: `${value}px`, width: `${barWidth}px`, margin: "0 3px" }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default Visualizer;
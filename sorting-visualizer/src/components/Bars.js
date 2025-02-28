import React from 'react';

const Bars = ({ array }) => {
  return (
    <div className="bars-container">
      {array.map((value, idx) => {
        const barWidth = Math.max(8, (window.innerWidth - 250) / array.length);
        return (
          <div
            key={idx}
            className="bar"
            style={{ height: `${value}px`, width: `${barWidth/2}px`, margin: '0 3px' }}
          ></div>
        );
      })}
    </div>
  );
};

export default Bars;
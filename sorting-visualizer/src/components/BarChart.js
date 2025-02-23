import React from "react";

const BarChart = ({ array }) => {
  const barWidth = Math.max(8, (window.innerWidth - 250) / array.length);

  return (
    <div className="bars-container">
      {array.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{
            width: `${barWidth}px`,
            height: `${value * 3}px`,
            margin: "0 3px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default BarChart;
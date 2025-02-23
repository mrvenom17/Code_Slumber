import React from 'react';

const Controls = ({ generateNewArray, size, setSize, speed, setSpeed }) => {
  return (
    <div className="controls-container">
      <button className="btn-white" onClick={generateNewArray}>New Array</button>

      <div>
        <label className="range-label">Size:</label>
        <input type="range" min="5" max="100" value={size} onChange={(e) => setSize(+e.target.value)} className="form-range" />
      </div>
      <div>
        <label className="range-label">Speed:</label>
        <input type="range" min="20" max="300" value={speed} onChange={(e) => setSpeed(+e.target.value)} className="form-range" />
      </div>

      {["Bubble", "Selection", "Insertion", "Merge", "Quick"].map(sort => (
        <button key={sort} className="btn-outline-white">{sort} Sort</button>
      ))}
    </div>
  );
};

export default Controls;
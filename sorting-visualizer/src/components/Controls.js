import React, { useState } from 'react';

const Controls = ({
  generateNewArray,
  size,
  setSize,
  speed,
  setSpeed,
  sort,
  fixedArray,
  setFixedArray,
}) => {
  const [useFixed, setUseFixed] = useState(false);

  const handleSort = (sortName) => {
    sort(sortName, useFixed);
  };

  return (
    <div className="controls-container">
      <div className="array-type-toggle">
        <button
          className={`btn-toggle ${!useFixed ? 'active' : ''}`}
          onClick={() => setUseFixed(false)}
        >
          Random Array
        </button>
        <button
          className={`btn-toggle ${useFixed ? 'active' : ''}`}
          onClick={() => setUseFixed(true)}
        >
          Fixed Array
        </button>
      </div>

      {!useFixed ? (
        <div className="random-array-controls">
          <button className="btn-white" onClick={generateNewArray}>
            New Random Array
          </button>

          <div style={{ marginTop: '15px' }}> {}
            <label className="range-label">Size:</label>
            <input
              type="range"
              min="5"
              max="80"
              value={size}
              onChange={(e) => setSize(+e.target.value)}
              className="form-range"
            />
          </div>


          <div>
            <label className="range-label">Speed:</label>
            <input
              type="range"
              min="20"
              max="300"
              value={speed}
              onChange={(e) => setSpeed(+e.target.value)}
              className="form-range"
            />
          </div>


          {['Bubble', 'Selection', 'Insertion', 'Merge', 'Quick'].map((sortName) => (
            <button
              key={sortName}
              className="btn-outline-white"
              onClick={() => handleSort(sortName)}
            >
              {sortName} Sort
            </button>
          ))}
        </div>
      ) : (
        <div className="fixed-array-controls">
          <div style={{ marginTop: '20px' }}> {}
            <label className="fixed-array-label">Fixed Array :</label>
            <input
              type="text"
              value={fixedArray}
              onChange={(e) => setFixedArray(e.target.value)}
              placeholder="e.g., 10,20,30"
            />
            {['Bubble', 'Selection', 'Insertion', 'Merge', 'Quick'].map((sortName) => (
              <button
                key={sortName}
                className="btn-fixed-sort"
                onClick={() => handleSort(sortName)}
              >
                {sortName} Sort
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;
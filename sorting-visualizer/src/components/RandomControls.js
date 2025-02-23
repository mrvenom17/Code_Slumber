import React from "react";

const RandomControls = ({ setAlgorithm, setArraySize, startSorting }) => {
  return (
    <div className="controls-section-random">
      <label>
        Select Algorithm:
        <select
          className="form-select"
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="">Select Sorting Algorithm</option>
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </label>

      <button className="btn-sort" onClick={startSorting}>
        Sort
      </button>
    </div>
  );
};

export default RandomControls;
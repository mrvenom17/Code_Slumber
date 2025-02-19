import React from "react";

const SortingControls = ({ setAlgorithm, setArraySize, startSorting }) => {
    return (
        <div>
            <select onChange={(e) => setAlgorithm(e.target.value)}>
                <option value="">Select Sorting Algorithm</option>
                <option value="bubble">Bubble Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="quick">Quick Sort</option>
            </select>
            <input type="number" min="5" max="50" placeholder="Array Size" onChange={(e) => setArraySize(e.target.value)} />
            <button onClick={startSorting}>Sort</button>
        </div>
    );
};

export default SortingControls;

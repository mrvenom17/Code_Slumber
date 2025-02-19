import React, { useState } from "react";

const Controls = ({ onSort }) => {
    const [algorithm, setAlgorithm] = useState("");
    const [arrayInput, setArrayInput] = useState("");

    const handleSort = () => {
        const array = arrayInput.split(",").map(Number);
        onSort(algorithm, array);
    };

    return (
        <div>
            <select onChange={(e) => setAlgorithm(e.target.value)}>
                <option value="">Select Algorithm</option>
                <option value="quick">Quick Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="selection">Selection Sort</option>
            </select>

            <input
                type="text"
                placeholder="Enter numbers, e.g. 5,3,8"
                onChange={(e) => setArrayInput(e.target.value)}
            />
            
            <button onClick={handleSort}>Sort</button>
        </div>
    );
};

export default Controls;

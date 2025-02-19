import React, { useState } from "react";
import axios from "axios";
import BarChart from "./BarChart";

const SortingVisualizer = () => {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
    const [arraySize, setArraySize] = useState(10);
    const [array, setArray] = useState([]);

    const handleSorting = async () => {
        if (!selectedAlgorithm) return alert("Select a sorting algorithm!");

        const response = await axios.post("http://localhost:8080/sort", {
            algorithm: selectedAlgorithm,
            array: [...Array(arraySize)].map(() => Math.floor(Math.random() * 100))
        });

        setArray(response.data);
    };

    return (
        <div>
            <h2>Sorting Visualizer</h2>
            <select onChange={(e) => setSelectedAlgorithm(e.target.value)}>
                <option value="">Select Sorting Algorithm</option>
                <option value="bubble">Bubble Sort</option>
                <option value="selection">Selection Sort</option>
                <option value="insertion">Insertion Sort</option>
                <option value="merge">Merge Sort</option>
                <option value="quick">Quick Sort</option>
            </select>
            <input type="number" min="5" max="50" value={arraySize} onChange={(e) => setArraySize(e.target.value)} />
            <button onClick={handleSorting}>Sort</button>
            <BarChart array={array} />
        </div>
    );
};

export default SortingVisualizer;

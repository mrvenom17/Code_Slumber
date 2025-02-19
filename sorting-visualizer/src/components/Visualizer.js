import React, { useState } from "react";
import { sortArray } from "../api/sortingAPI";
import Controls from "./Controls";

const Visualizer = () => {
    const [bars, setBars] = useState([]);

    const handleSort = async (algorithm, array) => {
        const steps = await sortArray(algorithm, array);
        animateSorting(steps);
    };

    const animateSorting = (steps) => {
        steps.forEach((step, index) => {
            setTimeout(() => {
                setBars([...step]);
            }, index * 500);
        });
    };

    return (
        <div>
            <Controls onSort={handleSort} />
            <div>{bars.map((num, i) => <div key={i} style={{height: num * 5}} />)}</div>
        </div>
    );
};

export default Visualizer;

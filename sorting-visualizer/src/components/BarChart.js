import React from "react";

const BarChart = ({ array }) => {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", height: "300px", border: "1px solid black" }}>
            {array.map((value, index) => (
                <div
                    key={index}
                    style={{
                        width: "20px",
                        height: `${value * 3}px`,
                        margin: "2px",
                        backgroundColor: "blue",
                    }}
                ></div>
            ))}
        </div>
    );
};

export default BarChart;

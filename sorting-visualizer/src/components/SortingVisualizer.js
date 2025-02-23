import React, { useState, useEffect } from 'react';
import Header from './Header';
import Controls from './Controls';
import Visualizer from './Visualizer';
import Footer from './Footer';
import '../SortingVisualizer.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    generateNewArray();
  }, [size]);

  const generateNewArray = () => {
    setArray(Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10));
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <div className="main-container">
        <Controls
          generateNewArray={generateNewArray}
          size={size}
          setSize={setSize}
          speed={speed}
          setSpeed={setSpeed}
        />
        <Visualizer array={array} />
      </div>
      <Footer />
    </div>
  );
};

export default SortingVisualizer;
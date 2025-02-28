import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import Visualizer from './components/Visualizer';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
//import algorithm

const App = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(100);
  const [fixedArray, setFixedArray] = useState('');

  useEffect(() => {
    generateNewArray();
  }, [size]);

  const generateNewArray = () => {
    setArray(Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10));
  };

  const sort = (algorithm) => {
    // if (algorithm === 'Bubble Sort') {
    //     bubbleSort(array, setArray, speed);//change if needed
    // } else if (algorithm === 'Selection Sort') {
    //     selectionSort(array, setArray, speed);
    // }else if (algorithm === 'Selection Sort') {
    //     selectionSort(array, setArray, speed);
    // }else if (algorithm === 'Selection Sort') {
    //     selectionSort(array, setArray, speed);
    // }else if (algorithm === 'Selection Sort') {
    //     selectionSort(array, setArray, speed);
    // }
  };

  const performFixedSort = () => {
    const fixedArrayNumbers = fixedArray.split(',').map(Number).filter(Number.isFinite);
    if (fixedArrayNumbers.length > 0) {
      setArray(fixedArrayNumbers);
      alert('Fixed array loaded. Now click on a sort button.');
    } else {
      alert('Invalid fixed array input.');
    }
  };

  return (
    
    <div className="d-flex flex-column vh-100"> 
    <ParticlesBackground/>     
      <Header />
      <div className="main-container">
        <Controls
          generateNewArray={generateNewArray}
          size={size}
          setSize={setSize}
          speed={speed}
          setSpeed={setSpeed}
          sort={sort}
          fixedArray={fixedArray}
          setFixedArray={setFixedArray}
          performFixedSort={performFixedSort}
        />
        <Visualizer array={array} />
      </div>
      <Footer />
      </div>
  );
};

export default App;

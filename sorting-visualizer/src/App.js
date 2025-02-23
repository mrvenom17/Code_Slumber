import React from 'react';
import ReactDOM from 'react-dom';
import SortingVisualizer from './components/SortingVisualizer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <SortingVisualizer />
  </React.StrictMode>,
  document.getElementById('root')
);
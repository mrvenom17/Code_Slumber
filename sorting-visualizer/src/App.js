import React from "react";
import Header from "./components/Header";
import Visualizer from "./components/Visualizer";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
    return (
        <div className="app-container">
            <Header />
            <Visualizer />
            <Footer />
        </div>
    );
}

export default App;

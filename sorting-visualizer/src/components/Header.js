<<<<<<< HEAD
import React from "react";
import logo from "../logo/logo.jpg";

const Header = () => {
    return (
        <header className="text-center p-3 bg-dark text-white">
            <img src={logo} alt="LazySort Logo" style={{ height: '50px' }} />
            <h6>Sorting Visualizer</h6>
=======
import logo from './logo/logo.jpg';
const Header = () => {
    return (
        <header>
            <img src={logo} alt="LazySort Logo" style={{ height: '50px' }} />
>>>>>>> origin/main
        </header>
    );
};

export default Header;
import React from "react";
import { Link } from 'react-router-dom';
import "./navBar.css"

const NavBar = () => {
    return (
        <nav className="navBar">
            
            <button>
                <Link to="/Transactions">Transactions</Link>
            </button>
            <a href="/">BUDGET!</a>
            <button>
                <Link to="/transactions/new">New Transaction</Link>
            </button>
        </nav>
    );
};

export default NavBar;
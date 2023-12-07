import React from "react";
import { Link } from 'react-router-dom';


const navBar = () => {
    return (
        <nav>
            
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

export default navBar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./newTransaction.css";

function NewTransaction() {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
        itemName: "",
        amount: "",
        date: "",
        from: "",
        category: "",
    });

    const addTransaction = () => {
        setTransactions([...transactions, newTransaction]);
        setNewTransaction({
            itemName: "",
            amount: "",
            date: "",
            from: "",
            category: "",
        });
    };

    const handleTextChange = (event) => {
        setNewTransaction({ ...newTransaction, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction();
    };

    return (
        <div className="newTransactionForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="itemName">Item Name:</label>
                <input
                    id="itemName"
                    value={newTransaction.itemName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Item Name"
                    required
                />

                <label htmlFor="amount">Amount:</label>
                <input
                    id="amount"
                    type="text"
                    required
                    value={newTransaction.amount}
                    placeholder="Amount"
                    onChange={handleTextChange}
                />

                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    type="text"
                    name="date"
                    value={newTransaction.date}
                    placeholder="Date"
                    onChange={handleTextChange}
                    required
                />

                <label htmlFor="from">From:</label>
                <input
                    id="from"
                    value={newTransaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="From/To"
                    required
                />

<label htmlFor="categoryDescription">Category:</label>
<textarea
  id="categoryDescription"
  name="categoryDescription"
  value={newTransaction.category}
  onChange={handleTextChange}
  placeholder="Category"
/>


                <br />
                <input type="submit" value="Add Transaction" />
            </form>

            <div>
                <h2>Added Transactions:</h2>
                <ul>
                    {transactions.map((transaction, index) => (
                        <li key={index}>
                            <strong>Item Name:</strong> {transaction.itemName}, <strong>Amount:</strong> {transaction.amount}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default NewTransaction;

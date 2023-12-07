import { Link } from "react-router-dom";
import './transaction.css'

function Transaction({ transaction, onDelete }) {
    const handleDelete = () => {
        onDelete(transaction.id);
    };

    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Item</th>
                        <th>$Amount</th>
                        <th>Delete?</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{transaction.date}</td>
                        <td style={{ cursor: "alias" }}>
                            <Link to={`/transaction/${transaction.id}`}>
                                {transaction.itemName}
                            </Link>
                        </td>
                        <td>${transaction.amount}</td>
                        <td> 
                            <button onClick={handleDelete}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Transaction;

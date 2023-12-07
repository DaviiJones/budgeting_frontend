import React, { useState, useEffect } from "react";
import Transaction from "./transaction";
import { v4 as uuidv4 } from 'uuid';

const API = import.meta.env.VITE_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const maxAmount = 10000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/transactions`);
        const responseJSON = await response.json();

        if (Array.isArray(responseJSON)) {
          const transactionsWithIds = responseJSON.map(transaction => ({
            ...transaction,
            id: uuidv4(),
          }));

          setTransactions(transactionsWithIds);

          const calculatedTotal = transactionsWithIds.reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
          setTotalAmount(calculatedTotal);

          const remainder = maxAmount - calculatedTotal;
          setRemainder(remainder);
        } else {
          console.log('Invalid response format');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="transactions">
      <section>
        <div className="total-amount">Total Amount: ${totalAmount.toFixed(2)}</div>
        <div className="remainder">Remainder: ${remainder.toFixed(2)}</div>
        <table>
          <thead>
            <tr>
              <th>Transaction List</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;

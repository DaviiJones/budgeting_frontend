import React from "react";

import Transaction from "./transaction";

const transactions = () => {

    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      fetch(`${API}/transactions`)
        .then(response => response.json())
        .then((responseJSON) => {
          console.log(responseJSON);
          setTransactions(responseJSON.data.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    return (
        <div className="transactions">
        <section>
          <table>
            <thead>
              <tr>
                <th>See this transaction</th>
           
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                return <Transaction key={transaction.id} bookmark={transaction} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    );
  };
  
  export default transactions;
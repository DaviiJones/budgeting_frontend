import { Link } from "react-router-dom";

function transaction({ transaction }) {
  return (
    <tr>
    
    <td style={{ cursor: "alias" }}>
        <a href={transaction.url} target="_blank" rel="noreferrer">
          {transaction.name}
        </a>
      </td>
      <td>
        <Link to={`/transaction/${transaction.id}`}></Link>
      </td>
    </tr>
  );
}

export default transaction;
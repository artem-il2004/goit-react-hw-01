import css from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table>
      <thead className={ css.top}>
        <tr >
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item,index) => (
          <tr key={item.id}
            className={index % 2 === 1 ? css.alternateRow : ""}
          >
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;

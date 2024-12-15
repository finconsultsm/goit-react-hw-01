import sc from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={sc.table}>
      <thead className={sc.thead}>
        <tr className={sc.tr}>
          <th className={sc.th}>Type</th>
          <th className={sc.th}>Amount</th>
          <th className={sc.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={sc.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={sc.tr} key={id}>
            <td className={sc.td}>{type}</td>
            <td className={sc.td}>{amount}</td>
            <td className={sc.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

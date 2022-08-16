import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';



const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td className={s.history}>{type}</td>
      <td className={s.history}>{amount}</td>
      <td className={s.history}>{currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import s from './feedback.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={s.good}>Good: {good}</p>
      <p className={s.neutral}>Neutral: {neutral}</p>
      <p className={s.bad}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.positive}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

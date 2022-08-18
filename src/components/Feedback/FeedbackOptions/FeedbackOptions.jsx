import s from './feedback-options.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btn = options.map(option => (
    <button
      key={nanoid()}
      style={{ textTransform: 'capitalize' }}
      className={s.fb__btn}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
  return <div className={s.block__btn}>{btn}</div>;
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

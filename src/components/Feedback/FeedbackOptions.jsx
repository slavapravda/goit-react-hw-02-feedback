import s from './feedback.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btn = options.map(option => (
    <button
      key={nanoid()}
      style={{textTransform: 'capitalize'}}
      className={s.fb__btn}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
  return <div>{btn}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

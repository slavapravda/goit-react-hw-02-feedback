import s from './feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [good, neutral, bad] = options;
  return (
    <div>
      <button
        className={s.fb__btn}
        type="button"
        onClick={() => onLeaveFeedback(good)}
      >
        Good
      </button>
      <button
        className={s.fb__btn}
        type="button"
        onClick={() => onLeaveFeedback(neutral)}
      >
        Neutral
      </button>
      <button
        className={s.fb__btn}
        type="button"
        onClick={() => onLeaveFeedback(bad)}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

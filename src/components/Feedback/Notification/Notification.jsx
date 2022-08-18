import PropTypes from 'prop-types';
import s from './notification.module.css';


const Notification = ({ message }) => {
  return (
    <>
      <h3 className={s.fb__desc}>{message}</h3>
    </>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

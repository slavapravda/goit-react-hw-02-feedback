import PropTypes from 'prop-types';
import s from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      {children}
    </>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

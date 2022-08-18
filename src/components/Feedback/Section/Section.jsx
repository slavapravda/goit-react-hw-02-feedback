import PropTypes from 'prop-types'
import s from './section.module.css';


const Section = ({title, children}) => {
    // console.log(children)
    return (
        <>
        <h1 className={s.title}>{title}</h1>
        {children}
        </>
    );
}

export default Section;

Section.defaultProps = {
    children: {},
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
}
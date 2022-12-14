import styles from '../Button/Button.module.css'
import PropTypes from 'prop-types'

export const Button = ({ text, handlerClick }) => {
  return (
    <>
      <button className={styles.Button} type="button" onClick={handlerClick}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handlerClick: PropTypes.func.isRequired
}

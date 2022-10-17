import styles from '../Searchbar/Searchbar.module.css'
import { CiSearch } from "react-icons/ci";
import PropTypes from 'prop-types'

export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
            <CiSearch />
          </button>

          <input
            name="input"
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

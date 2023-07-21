import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
const Navbar = () => {
  return (
    <nav>
      {/* --Nom/logo--- */}
      <a href="/" className={styles.logo}>
        MOVIEAPP
      </a>
      {/* --menu de navbar-- */}
      <ul className={styles.menu}>
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href=""> Movie</a>
        </li>
        <li>
          <a href="#"> TVShows</a>
        </li>
        <li>
          <a href="#"> Others</a>
        </li>
      </ul>
      {/* --menu de recherche --- */}
      <div className={styles.search}>
        <input type="text" placeholder="search.." />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </nav>
  );
};

export default Navbar;

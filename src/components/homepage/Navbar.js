import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import moviesData from '../data';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  /*searchquery took the value of the input  */
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredMovies = moviesData.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filteredMovies);
  };
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
      <div className={styles.search_container}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="search.."
            value={searchQuery}
            onChange={handleSearch}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
        {searchQuery.length > 0 && (
          <div className={styles.search_item}>
            {filteredMovies.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <div key={movie.id}>{movie.title}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

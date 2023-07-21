import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import moviesData from '../data';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesData);
  }, []);
  return (
    <div>
      {/* --navigation-- */}
      <Navbar />
      <section
        className={styles.Hero}
        style={{ backgroundImage: `url("./images/background.jpg")` }}
      >
        <div className={styles.Hero_title}>
          <h1 style={{ color: '#ffffff', fontSize: '60px' }}>
            Welcome to <span>MovieApp</span>
          </h1>
          <h2 style={{ color: '#ffffff' }}>
            Unlimited movies and TV shows, and much more
          </h2>
          <button className={styles.Hero_button}>Signin</button>
        </div>
      </section>
      <section className={styles.main}>
        {/* --vitrine--- */}

        <h1 className={styles.showcase_heading}>Showcase</h1>
        {/* ---cases--- */}

        <div className={styles.showcase_box}>
          <ul>
            <li>
              <img src="./images/s-1.jpg" />
            </li>
            <li>
              <img src="./images/s-2.jpg" />
            </li>
            <li>
              <img src="./images/s-3.jpg" />
            </li>
            <li>
              <img src="./images/s-4.jpg" />
            </li>
            <li>
              <img src="./images/s-5.png" />
            </li>
            <li>
              <img src="./images/black-banner.png" />
            </li>
            <li>
              <img src="./images/black-banner.png" />
            </li>
            <li>
              <img src="./images/black-banner.png" />
            </li>
          </ul>
        </div>
      </section>
      {/* --movies--- */}
      <div className={styles.movies}>
        <div className={styles.movies_heading}>
          <h1>Movies</h1>
        </div>
        <section className={styles.movies_list}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movies_box}>
              <div className={styles.movie_img}>
                <img src={movie.image} alt={movie.title} />
              </div>
              <a className={styles.movie_description} href="#">
                {movie.title}
              </a>
              <Link to={`/movies/${movie.id}`}>
                <button className={styles.movie_button}>Watch Now</button>
              </Link>
            </div>
          ))}
        </section>
      </div>
      {/* --Footer --- */}
      <Footer />
    </div>
  );
};

export default Home;

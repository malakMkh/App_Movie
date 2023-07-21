import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.css';
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
const MovieDetail = () => {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <div
        className={styles.movie_details}
        style={{
          backgroundImage: `url(${movie.image})`,
        }}
      >
        <div className={styles.movie_description}>
          <img src={movie.image} alt={movie.title} />
          <div className="movie_text">
            <h2>
              {' '}
              <strong> {movie.title}</strong>
            </h2>
            <p> {movie.description}</p>
            <div className={styles.play_trailer}>
              {' '}
              <a href="#trailer" style={{ color: '#ffffff' }}>
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.production_details}>
        <div>
          <h3>
            <strong>MovieDetails</strong>
          </h3>
          <hr style={{ borderTop: '2px solid navy' }} />
          <div>
            <h4>
              <strong>Writer:{movie.Writer} </strong>
            </h4>
            <hr style={{ borderTop: '2px solid navy' }} />
            <h4>
              <strong>Stars: {movie.Stars}</strong>
            </h4>
            <hr style={{ borderTop: '2px solid navy' }} />
            <h4>
              <strong>Director:{movie.Director}</strong>
            </h4>
            <hr style={{ borderTop: '2px solid navy' }} />
          </div>
        </div>
        <div className="trailer" id="trailer">
          <h2 style={{ color: 'blue' }}>Trailer</h2>
          <iframe
            src={movie.trailerUrl}
            title="KIN Trailer"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MovieDetail;

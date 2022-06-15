import PropsType from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ cover, title, rating, summary, genres, id }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie_img} src={cover} alt={title} title={title} />
      <div>
        <h2 className={styles.movie_title}><Link to={`movie/${id}`}>{title}</Link></h2>
        <div className={styles.movie_rating}>Rating : {rating}</div>
        <p></p>
        <div>Summary : {summary.length > 210 ? `${summary.slice(0, 210)}...` : summary}</div>
        <ul className={styles.movie_genres}>
          {genres.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.PropsType = {
  id: PropsType.number.isRequired,
  cover: PropsType.string.isRequired,
  title: PropsType.string.isRequired,
  rating: PropsType.number.isRequired,
  summary: PropsType.string.isRequired,
  genres: PropsType.arrayOf(PropsType.string).isRequired,
};

export default Movie;

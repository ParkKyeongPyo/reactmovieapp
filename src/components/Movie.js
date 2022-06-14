import PropsType from "prop-types";
import {Link} from "react-router-dom";

function Movie({ cover, title, rating, summary, genres, id }) {
  return (
    <div>
      <h2><Link to={`movie/${id}`}>{title}</Link></h2>
      <img src={cover} alt={title} title={title} />
      <div>Rating : {rating}</div>
      <div>Summary : {summary}</div>
      <ul>
        {genres.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
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

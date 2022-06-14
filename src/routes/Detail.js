import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`)
      .then((res) => res.json())
      .then((json) => setMovie(json.data.movie));
  }, []);

  console.log("Hi");

  return (
    <div>
      <h2>{movie.title} - Detail</h2>
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        title={movie.title}
      />

      <ul>
        <li>Slug : {movie.slug}</li>
        <li>Runtime : {movie.runtime}</li>
        <li>Year : {movie.year}</li>
      </ul>
    </div>
  );
}

export default Detail;

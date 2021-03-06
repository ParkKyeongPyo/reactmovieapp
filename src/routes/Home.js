import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.data.movies);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
        <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movie}>
          {movie.map((item) => (
            <Movie
              key={item.id}
              id={item.id}
              cover={item.medium_cover_image}
              title={item.title}
              rating={item.rating}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

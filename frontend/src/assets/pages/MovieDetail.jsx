import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetailCard from "../components/MovieDetailCard";
import Navbar from "../components/Navbar";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/movies/${movieId}`)
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        if (success) {
          setMovie(result);
        } else {
          console.log("Error by backend:", error);
          alert(message);
        }
      });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MovieDetailCard
          title={movie.title}
          year={movie.year}
          director={movie.director}
          rating={movie.rating}
          genres={movie.genres}
          text={movie.text}
          runtime={movie.runtime}
        />
      </main>
    </>
  );
};

export default MovieDetail;

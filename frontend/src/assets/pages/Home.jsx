import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/movies`)
      .then((res) => res.json())
      .then(({ success, result, error, message }) => {
        if (success) {
          setAllMovies(result);
        } else {
          console.log("Error by backend:", error);
          setErrorMessage(message || "Error while loading all Movies");
        }
      });
  }, []);

  return (
    <>
      <header className="home-header-wrapper">
        <Navbar />
      </header>
      <h1>Welcome to your MovieDB</h1>
      <div className="moviecard-grid">
        {allMovies.map((movie, index) => (
          <div key={movie._id}>
            {/* <h1>{movie.title}</h1> */}
            <MovieCard
              id={movie._id}
              title={movie.title}
              bildURl={movie.bildUrl}
              rating={movie.rating}
              director={movie.director}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

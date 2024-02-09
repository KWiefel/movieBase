import { useNavigate } from "react-router-dom";
import img from "/movie.jpg";
import "./MovieCard.scss";

const MovieCard = ({ id, title, bildURl, rating, director }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="moviecard-wrapper"
        onClick={() => navigate(`/movie/${id}`)}
      >
        <div className="moviecard-img">
          <img src={img} alt="MovieCover" />
        </div>
        <div className="moviecard-title">
          <h5>{title}</h5>
          <p>{director}</p>
          <p>{rating} ⭐️</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;

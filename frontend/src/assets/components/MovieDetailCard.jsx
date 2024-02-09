import img from "/movie.jpg";
import "./MovieDetailCard.scss";

const MovieDetailCard = ({
  title,
  year,
  director,
  rating,
  genres,
  text,
  runtime,
}) => {
  return (
    <>
      <div className="moviedetails-wrapper">
        <div className="moviedetails-title">
          <h3>{title}</h3>
          <p>{year}</p>
          <p>{director}</p>
        </div>

        <div className="moviedetails-flex">
          <div className="movie-picture">
            <img src={img} alt="MovieCover" />
          </div>
          <div className="movie-text">
            <p className="genre-bumper">{`${genres} `}</p>
            <h3>Story</h3>
            <p>{text}</p>
          </div>
        </div>

        <div className="movie-footer">
          <p>Rating: {rating}</p>
          <p>Duration: {runtime}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailCard;

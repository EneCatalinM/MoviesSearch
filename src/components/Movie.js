import React from "react";
//we will loop through array and render every movie on the screen
const Movie = props => (
  <div className="d-flex p-2  flex-wrap justify-content-around align-content-center">
    {props.movies.map(movie => {
      return (
        <div className="card" style={{ width: "18rem" }} key={movie.imdbID}>
          <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">
              Type: {movie.Type}
              <br />
              Release year: {movie.Year}
            </p>
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}/`}
              target="_blank"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Go to IMDB
            </a>
          </div>
        </div>
      );
    })}
  </div>
);
export default Movie;

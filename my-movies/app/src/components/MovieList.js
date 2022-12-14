import React from "react";

function MovieList(props) {
  // function handleClick(event){
  //   console.log(event);
  // }
  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.imageURL}
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  onClick={() => {
                    props.deleteMovieProp(movie);
                  }}
                  type="button"
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <h2>
                  <span className="badge bg-info">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;




var MovieStatus = (props) => (

	<div className="movie-status-buttons">
		<button className="watched-button" onClick={(event) => 
			props.filterMovies(0)}>Watched Movies</button>

		<button className="movies-to-see" onClick={(event) => 
			props.filterMovies(1)}>Must-see Movies</button>

		<button className="all-movies" onClick={(event) => 
			props.filterMovies(2)}>All Movies</button>


	</div>

	)


export default MovieStatus;
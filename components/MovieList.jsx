import MovieListEntry from "./MovieListEntry.js"

var MovieList = (props)	=> (

	<ul id='movie-list'>
		{
		  props.movies.map((movie, index) => 

		  <MovieListEntry movie={movie} index={index}
		  	highlightMovie={props.highlightMovie}
		  	toggleWatched={props.toggleWatched}/>
		
		)}
	</ul>
)

export default MovieList;



//know what movie is clicked on
//update the watched property of the clicked movie
//use this.setState to re render. 
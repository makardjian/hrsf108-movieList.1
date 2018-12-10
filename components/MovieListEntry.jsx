import WatchedToggle from './WatchedToggle.js'

var MovieListEntry = (props) => {

		if (props.movie.highlighted) {
		  return (
		  <div className='movie-title'>
		  <li className='highlighted' value={props.index}
		  	onClick={(event) => props.highlightMovie(event.target.value)} 
		  	>{props.movie.title}</li>
		  		<WatchedToggle movie={props.movie} index={props.index} 
			  		toggleWatched={props.toggleWatched}/>
		  		<p>
		  			Year: {props.movie.year} <br/>
		  			Runtime: {props.movie.runtime}min <br/>
		  			Imdb Rating: {props.movie.imdbRating}
		  		</p>
		  </div>
		  

		)} else  {

		  return (
		  <div className='movie-title'>
			  <li value={props.index}
			  	onClick={(event) => props.highlightMovie(event.target.value) 
			  	}>{props.movie.title}</li>
			  <WatchedToggle movie={props.movie} index={props.index} 
			  	toggleWatched={props.toggleWatched}/>
		  </div>

		)}

	}	



export default MovieListEntry;


				// <button className='test-button'>Test</button>
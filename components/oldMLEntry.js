var MovieListEntry = (props) => {

	if (props.movie.watched) {
	  return (
	  <div>
	  <li className='movie-title watched' value={props.index}
	  	onClick={(event) => props.toggleMovie(event.target.value)} 
	  	>{props.movie.title}</li>
	  		<p>
	  			Year: {props.movie.year} <br/>
	  			Runtime: {props.movie.runtime}min <br/>
	  			Imdb Rating: {props.movie.imdbRating}
	  		</p>
	  </div>
	  

	)} else  {

	  return (
	  <div>
		  <li className='movie-title' value={props.index}
		  	onClick={(event) => props.toggleMovie(event.target.value) 
		  	}>{props.movie.title}</li>
					<p>
		  			Year: {props.movie.year} <br/>
		  			Runtime: {props.movie.runtime}min <br/>
		  			Imdb Rating: {props.movie.imdbRating}
	  		 </p>
	  </div>

	)}

}	



export default MovieListEntry;
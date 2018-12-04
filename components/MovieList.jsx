// import App from './app.jsx';

var MovieList = (props)	=> (

	<ul id='movie-list'>
		{
		  props.movies.map((movie) =>
				<li className='movie-title'>{movie.title}</li>
		)}
	</ul>
)

export default MovieList;


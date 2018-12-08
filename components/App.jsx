// App will be my only stateful class component. The rest of my modules 
// will be functional classless components.
import exampleData from '../exampleData.js'
import MovieList from './MovieList.js'
import Search from './Search.js'
import AddMovies from './AddMovies.js'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			movieList: exampleData,
			currentList: exampleData,
			isHidden: false
		}


	}

	updateMovieList (data) {

		var matches = this.state.movieList.filter(movie => {
			return movie.title === data; 
		});

		if (!matches.length) {
		alert('Looks like there\'s no movie by that title on record.\n Please try another search.')

		} else {

		this.setState({
			currentList: matches
		});

		}
	}


	addMovie(input) {

		this.setState({movieList: event.target.value});

	}



	render() {
		return (
			<div className='container'>
				<h1>Movie List</h1>	
				<AddMovies/>
				<Search updateMovieList={this.updateMovieList.bind(this)}/>
				<MovieList movies={this.state.currentList} />
			</div>
		);
	}


}

export default App;
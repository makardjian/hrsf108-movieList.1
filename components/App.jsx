
import exampleData from '../exampleData.js'
import MovieList from './MovieList.js'
import Search from './Search.js'
import AddMovies from './AddMovies.js'
import MovieStatus from './MovieStatus.js'
import WatchedToggle from './WatchedToggle.js'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			movieList: exampleData,
			currentList: exampleData,
			userList: [],
			isHidden: false,
			watchedMovies: null,
			notWatched: null
		}
	}

	updateMovieList (data) {
		if (!this.state.userList.length) {
			var matches = this.state.movieList.filter(movie => {
				return movie.title === data; 
			});

			if (!matches.length) {
				alert('Looks like there\'s no movie by that title on record.\n' +
				 'Please try another search.')
			} else {
					this.setState({
						currentList: matches
					})
			}

		}

		if (this.state.userList.length) {
				var matches = this.state.userList.filter(movie => {
					return movie.title === data
				})

				if (!matches.length) {
					alert('Looks like there\'s no movie by that title on record.\n' +
						'Please try another search.')
				} else  {
						this.setState({
							currentList: matches
						})
				}
		}
	}

	addMovie(input) {

		//use variable to grab current state and make shallow copy
		var userList = this.state.userList.slice()

		//push the new movie inside userList
		userList.push({
			 title: input,
			 year: null,
		   runtime: null,
		   imdbRating: null,
			 watched: false,
			 highlighted: false
			}) 

		this.setState({
			currentList: userList,
			userList: userList
		});

	}

	highlightMovie(index) {

		var newData = this.state.currentList
		newData[index].highlighted = !newData[index].highlighted

			this.setState({
				userList: newData,
				currentList: newData
			})
	}

	toggleWatched(index) {
		var newData = this.state.currentList
		newData[index].watched = !newData[index].watched

		this.setState({
			currentList: newData
		})

	}

	filterMovies(value) {

		//0 will tell React to render only the watched movies
		if (value === 0) {
			if (this.state.userList.length) {
			var watchedMovies = this.state.userList.filter(movie => 
					movie.watched === true)
			} else {
				var watchedMovies = this.state.movieList.filter(movie => 
					movie.watched === true)
			}

			this.setState({
				watchedMovies: watchedMovies,
				currentList: watchedMovies
			})
		}

		//1 will tell React to render only the non-watched movies
		if (value === 1) {
			if (this.state.userList.length) {
			var notWatched = this.state.userList.filter(movie => 
					movie.watched === false)
			} else {
				var notWatched = this.state.movieList.filter(movie => 
					movie.watched === false)
			}

			this.setState({
				notWatched: notWatched,
				currentList: notWatched
			});

		}

		//2 will tell react to render all movies to the DOM
		if (value === 2) {
				if (this.state.userList.length) {
					this.setState({
						currentList: this.state.userList
				});

			} else {
				this.setState({
					currentList: this.state.movieList
				});
			}
		}
	}


	render() {
		return (
			<div className='container'>
				<h1>Movie List</h1>	
				<AddMovies addMovie={this.addMovie.bind(this)}/>
				<Search updateMovieList={this.updateMovieList.bind(this)}/>
				<MovieStatus filterMovies={this.filterMovies.bind(this)} />
				<MovieList movies={this.state.currentList} 
				highlightMovie={this.highlightMovie.bind(this)}
				toggleWatched={this.toggleWatched.bind(this)}/>
			</div>
		);
	}


}

export default App;



/*
Brainstorm for the watched feature:

I should have three tabs entitled 'Watched' and 'Can't Wait to See', and 'All movies'
	/when a user clicks on the watched button:
		/that should invoke a function that lives in App.
			/itterate over the currentList and toggle (hide) all the movies that are unwatched.
	/I should be able to use the same function to perform this functionality
		/if this is the case, I need to pass the event.target.value to the function that lives in App.
		/I can manually set different values that will be code for which movies to hide:
			0 = show only watched movies
			1 = show only movies to watch
			2 = show all movies 



*/














